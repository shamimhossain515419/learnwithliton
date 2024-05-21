import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const body = await req.json();
     if (!prisma.batch) {
      throw new Error("The 'batch' model is not defined in Prisma Client.");
    }
    const result = await prisma.batch.create({
      data: body,
    });

    if (!result) {
      return NextResponse.json({
        status: "fail",
        message: "Batch creation failed",
      });
    }

    return NextResponse.json({
      status: "success",
      data: result,
      message: "Batch successfully created",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", message: error.message });
  }
};

export async function GET(req, res, next) {
  try {
    let { searchParams } = new URL(req.url);
    let course_id = parseFloat(searchParams.get("id"));
    let name = searchParams.get("name") || "";
    const result = await prisma.batch.findMany();

    return NextResponse.json({
      status: "success",
      data: result,
      meassge: " success batch successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}
