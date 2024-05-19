import { VerifyToken } from "@/middleware/VerifyJwtToken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const { email, id } = await VerifyToken();
    const result = await prisma.courses.findMany({
      where: { id: id },
      include: {
        batch: true,
        payment: true,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: "  course get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", message: error.message });
  }
};
