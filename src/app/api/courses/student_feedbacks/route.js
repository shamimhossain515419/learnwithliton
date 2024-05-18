import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

//  create method student_feedbacks
export async function POST(req, res, next) {
  try {
    const { description, course_id, student_id } = await req.json();
    const upsertFeedback = await prisma.student_feedbacks.create({
      data: { description, course_id, student_id },
    });
    return NextResponse.json({
      status: "success",
      data: upsertFeedback,
      message: "  feedback successfully created",
    });
  } catch (error) {
    console.error("Error during upsert operation:", error);
    return NextResponse.json({ status: "fail", message: error?.message });
  }

}
//  get  student_feedbacks
export async function GET(req, res, next) {
  try {
    let { searchParams } = new URL(req.url);
    let course_id = parseFloat(searchParams.get("id"));
    const result = await prisma.student_feedbacks.findMany({
      where: {
        course_id: course_id,
      },
      include: {
        users: true,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: " student_feedbacks   get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}

// update student_feedbacks

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    let reqBody = await req.json();
    const result = await prisma.student_feedbacks.update({
      where: { id },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
//  delete student_feedbacks
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    const findCourse = await prisma.student_feedbacks.findUnique({
      where: { id },
    });
    if (!findCourse) {
      return NextResponse.json({
        status: "fail",
        data: "student_feedbacks not found",
      });
    }
    const result = await prisma.student_feedbacks.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error?.message });
  }
}
