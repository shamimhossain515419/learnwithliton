import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req, res, next) {
  try {
    const body = await req.json();
    const result = await prisma.courses.create({ data: body });
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
//  get  courses
export async function GET(req, res, next) {
  try {
    const data = await req.query;
    const result = await prisma.courses.findMany();
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

// update courses

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    let reqBody = await req.json();
    const result = await prisma.courses.update({
      where: { id },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    const findCourse = await prisma.courses.findUnique({
      where: { id },
    });
    if (!findCourse) {
      return NextResponse.json({
        status: "fail",
        data: "course not found",
      });
    }
    const result = await prisma.courses.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
