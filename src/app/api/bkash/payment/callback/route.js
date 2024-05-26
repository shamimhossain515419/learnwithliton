import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const tokenBkash = cookies().get("bkash_token");
  // const { email, id } = await VerifyToken(req);
  const id = 1;
  const getCourseInfo = cookies().get("course_info");
  console.log(getCourseInfo?.value);
  const { course_id, batch_id } = await JSON.parse(getCourseInfo?.value);

  // paymentID search params
  let paymentID = searchParams.get("paymentID") || "";
  let status = searchParams.get("status") || "";
  if (status === "cancel" || status === "failure") {
    return NextResponse.redirect(
      `http://localhost:5000/payment-action/error?message=${status}`
    );
  }

  if (status === "success") {
    try {
      const { data } = await axios.post(
        process.env.bkash_execute_payment_url,
        {
          paymentID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: `${tokenBkash?.value}`,
            "x-app-key": process.env.bkash_api_key,
          },
        }
      );

      if (data) {
        const paymetResult = await prisma.payment.create({
          data: {
            course_id: parseInt(course_id),
            batch_id: parseInt(batch_id),
            user_id: id,
            amount: 50,
            transaction_id: data?.paymentID,
            method_name: "Bkash",
            customerMsisdn: data?.customerMsisdn,
            currency: data?.currency,
            merchantInvoiceNumber: data?.merchantInvoiceNumber,
            trxID: data?.trxID,
            status: "success",
          },
        });

        const enrollmentResult = await prisma.enrollment.create({
          data: {
            course_id: parseInt(course_id),
            batch_id: parseInt(batch_id),
            user_id: parseInt(id),
            payment_id: parseInt(paymetResult?.id),
          },
        });
        // return NextResponse.json({
        //   massage: "success",
        //   enrollmentResult,
        //   paymetResult,
        // });

        return NextResponse.redirect(
          `http://localhost:5000/payment-action/success`
        );
      } else {
        return NextResponse.redirect(
          `http://localhost:5000/payment-action/success?message=${data.statusMessage}`
        );
      }
    } catch (error) {
      console.log(error);
      // return NextResponse({ messase: error });
      return NextResponse.redirect(
        `http://localhost:5000/payment-action/error?message=${error.message}&paymentID=${paymentID}`
      );
    }
  }
}
