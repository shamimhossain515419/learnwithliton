import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

//  create method mentors
export async function POST(req, res, next) {
  try {
    const body = await req.json();
    const existing = await prisma.mentors.findUnique({
      where: { course_id: body?.["course_id"] },
    });
    if (existing) {
      return NextResponse.json({
        status: "fail",
        data: " Mentors already exist",
      });
    }

    const result = await prisma.mentors.create({ data: body });
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
//  get  mentors
export async function GET(req, res, next) {
  try {
    let { searchParams } = new URL(req.url);
    let course_id = parseFloat(searchParams.get("id"));
    const result = await prisma.mentors.findMany({
      where: {
        course_id: course_id,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: " mentors   get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}

// update mentors

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    let reqBody = await req.json();
    const existing = await prisma.mentors.findUnique({
      where: { id: id },
    });
    if (!existing) {
      return NextResponse.json({
        status: "fail",
        data: "mentors not found ",
      });
    }
    const result = await prisma.mentors.update({
      where: { id },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
//  delete mentors
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    const findCourse = await prisma.mentors.findUnique({
      where: { id },
    });
    if (!findCourse) {
      return NextResponse.json({
        status: "fail",
        data: "mentors not found",
      });
    }
    const result = await prisma.mentors.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error?.message });
  }
}
