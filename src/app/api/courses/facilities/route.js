import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

//  create method facilities
export async function POST(req, res, next) {
  try {
    const body = await req.json();
    const result = await prisma.facilities.create({ data: body });
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
//  get  facilities
export async function GET(req, res, next) {
  try { 
    let { searchParams } = new URL(req.url);
    let course_id = parseFloat(searchParams.get("id"));
    const result = await prisma.facilities.findMany({
      where: {
        course_id: course_id,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: " facilities   get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}

// update facilities

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    let reqBody = await req.json();
    const result = await prisma.facilities.update({
      where: { id },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
//  delete facilities
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    const findCourse = await prisma.facilities.findUnique({
      where: { id },
    });
    if (!findCourse) {
      return NextResponse.json({
        status: "fail",
        data: "facilities not found",
      });
    }
    const result = await prisma.facilities.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error?.message });
  }
}
