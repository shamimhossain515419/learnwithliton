import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

//  create method student_feedbacks
export async function POST(req, res, next) {
  try {
    const body = await req.json();
    const existing = await prisma.student_feedbacks.findUnique({
      where: { course_id: body?.["course_id"] },
    });
    console.log(existing);
    if (existing) {
      return NextResponse.json({
        status: "fail",
        data: "course not found",
      });
    }

    const result = await prisma.student_feedbacks.create({ data: body });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: "  course successfully created",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
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
        Users: true,
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
