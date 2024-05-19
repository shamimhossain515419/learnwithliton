import { VerifyToken } from "@/middleware/VerifyJwtToken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const { email, id } = await VerifyToken();
     if (!id) {
      return NextResponse.json({
        status: "fail",
        code: 401,
        message: "verification failed",
      });
    }
    const { course_id, batch_id, amount, transaction_id, method_name } =
      await req.json();

    if (!prisma.enrollment || !prisma.payment) {
      throw new Error(
        "The 'enrollment' model is not defined in Prisma Client."
      );
    }
    const paymetResult = await prisma.payment.create({
      data: {
        course_id: parseInt(course_id),
        batch_id: parseInt(batch_id),
        amount: amount,
        transaction_id: transaction_id,
        method_name: method_name,
        user_id: parseInt(id),
        status: "success",
      },
    });
    if (!paymetResult) {
      return NextResponse.json({
        status: "fail",
        message: "Payment creation failed",
      });
    }
    const enrollmentResult = await prisma.enrollment.create({
      data: {
        course_id: parseInt(course_id),
        batch_id: parseInt(batch_id),
        user_id: parseInt(id),
        payment_id: parseInt(paymetResult?.id),
      },
    });
    if (!enrollmentResult) {
      return NextResponse.json({
        status: "fail",
        message: "enrollment creation failed",
      });
    }
    return NextResponse.json({
      status: "success",
      data: paymetResult,
      dataEnroll: enrollmentResult,
      message: "Payment and Enroll successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", message: error.message });
  }
};

export const GET = async (req, res) => {
  try {
    const { email, id } = await VerifyToken();
    if (!id) {
      return NextResponse.json({
        status: "fail",
        code: 401,
        message: "verification failed",
      });
    }
    const AllPayment = await prisma.payment.findMany({
      where: {
        user_id: parseInt(id),
      },
      include: {
        enrollment: true,
      },
    });
    return NextResponse.json({
      status: "success",
      data: AllPayment,
      message: "all payment success ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", message: error.message });
  }
};
