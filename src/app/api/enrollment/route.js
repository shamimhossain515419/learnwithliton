import { VerifyToken } from "@/middleware/VerifyJwtToken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET = async (req, res) => {
  try {
    const { id, email } = await VerifyToken(req);
    console.log("first");
    console.log(id, email);
    // const id = 1;
    // console.log(id, email);
    if (!id) {
      return NextResponse.json({
        status: "fail",
        code: 401,
        message: "verification failed",
      });
    }
    console.log(id);

    const Allenrollment = await prisma.enrollment.findMany({
      where: {
        user_id: parseInt(id),
      },
      include: {
        course: true,
        batch: { select: { name: true, id: true } },
      },
    });

    return NextResponse.json({
      status: "success",
      data: Allenrollment,
      message: "all payment success ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", message: error.message });
  }
};
