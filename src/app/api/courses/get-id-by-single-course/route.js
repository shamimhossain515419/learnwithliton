import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(req, res, next) {
  try {
    const { searchParams } = new URL(req.url);
    let id = parseInt(searchParams.get("id")) || "";
    const result = await prisma.courses.findUnique({
      where: { id: id },
      include: {
        batch: {
          where: { status: "running" },
        },
        inside_this_course: true,
        facilities: true,
        learning_purposes: true,
        prerequisites: true,
        student_feedbacks: {
          include: { users: { select: { name: true, photo: true } } },
        },
        mentors: true,
        course_faqs: true,
        learning_objects: true,
        payment: true,
        enrollment: true,
        targetAudience: true,
        assignmentShowcase: true,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: "  course get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}
