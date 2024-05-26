import { VerifyToken } from "@/middleware/VerifyJwtToken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const { id, email } = await VerifyToken(req);
    if (!id) {
      return NextResponse.json({
        status: "fail",
        code: 401,
        message: "verification failed",
      });
    }

    const enrollments = await prisma.enrollment.findMany({
      where: {
        user_id: parseInt(id),
      },
      include: {
        course: true,
        batch: { select: { name: true, id: true } },
      },
    });

    // Extract course IDs from the enrollments
    const courseIds = enrollments.map((enrollment) => enrollment.course_id);

    // Fetch mentor details based on the retrieved course IDs
    const mentors = await prisma.mentors.findMany({
      where: {
        course_id: {
          in: courseIds,
        },
      },
      select: {
        id: true,
        name: true,
        photo: true,
        about: true,
        description: true,
        education: true,
        phone: true,
        email: true,
        course_id: true, // Include course_id to map mentors to courses
      },
    });

    // Create a map of course ID to mentors
    const mentorsByCourseId = mentors.reduce((acc, mentor) => {
      if (!acc[mentor.course_id]) {
        acc[mentor.course_id] = [];
      }
      acc[mentor.course_id].push(mentor);
      return acc;
    }, {});

    // Add mentor details to each enrollment
    const enrollmentsWithMentors = enrollments.map((enrollment) => ({
      ...enrollment,
      mentors: mentorsByCourseId[enrollment.course_id] || [],
    }));

    return NextResponse.json({
      status: "success",
      data: enrollmentsWithMentors,
      message: "All enrollments with mentors fetched successfully.",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", message: error.message });
  }
};
