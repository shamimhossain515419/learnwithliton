import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);

  let paymentID = searchParams.get("paymentID") || "";
  let status = searchParams.get("status") || "";
  console.log(paymentID, status);

  if (status === "cancel" || status === "failure") {
    return NextResponse.redirect(
      `http://localhost:5000/payment/error?message=${status}`
    );
  }
  if (status === "success") {
    try {
      const { data } = await axios.post(process.env.bkash_execute_payment_url, {
        paymentID,
      });
      if (data && data.statusCode === "0000") {
        //const userId = globals.get('userId')
        await paymentModel.create({
          userId: Math.random() * 10 + 1,
          paymentID,
          trxID: data.trxID,
          date: data.paymentExecuteTime,
          amount: parseInt(data.amount),
        });

        return NextResponse.redirect(`http://localhost:5000/success`);
      } else {
        return NextResponse.redirect(
          `http://localhost:5000/payment?message=${data.statusMessage}`
        );
      }
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(
        `http://localhost:5000/payment/success?message=${error.message}`
      );
    }
  }
}
