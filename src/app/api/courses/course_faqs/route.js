import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

//  create method course_faqs
export async function POST(req, res, next) {
  try {
    const body = await req.json();

    const result = await prisma.course_faqs.create({ data: body });
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
//  get  course_faqs
export async function GET(req, res, next) {
  try {
    let { searchParams } = new URL(req.url);
    let course_id = parseFloat(searchParams.get("id"));
    let title = searchParams.get("title") || "";
    let page = parseInt(searchParams.get("page")) || 1;
    let limit = parseInt(searchParams.get("limit")) || 10;
     const [result, totalCount] = await Promise.all([
      prisma.course_faqs.findMany({
        where: {
          course_id: course_id,
          title: {
            contains: title,
          },
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.course_faqs.count({
        where: {
          course_id: course_id,
          title: {
            contains: title,
          },
        },
      }),
    ]);

    return NextResponse.json({
      status: "success",
      data: result,
      count: totalCount,
      meassge: " course_faqs   get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}

// update course_faqs

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    let reqBody = await req.json();
    const existing = await prisma.course_faqs.findUnique({
      where: { id: id },
    });
    if (!existing) {
      return NextResponse.json({
        status: "fail",
        data: "course_faqs not found ",
      });
    }
    const result = await prisma.course_faqs.update({
      where: { id },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
//  delete course_faqs
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    const findCourse = await prisma.course_faqs.findUnique({
      where: { id },
    });
    if (!findCourse) {
      return NextResponse.json({
        status: "fail",
        data: "course_faqs not found",
      });
    }
    const result = await prisma.course_faqs.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error?.message });
  }
}
