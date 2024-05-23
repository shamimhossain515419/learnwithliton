import { BkashBerifytoekn } from "@/middleware/bkashVerifyToken";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req, res, next) => {
  try {
    const bkashToen = await BkashBerifytoekn(req, res, next);
    const tokenBkash = cookies().get("bkash_token");
    console.log(tokenBkash);
    const { amount, userId } = await req.json();
    console.log(amount, userId);
    console.log(process.env.bkash_create_payment_url);

    const { data } = await axios.post(
      process.env.bkash_create_payment_url,
      {
        mode: "0011",
        payerReference: " ",
        callbackURL: "http://localhost:5000/api/bkash/payment/callback",
        amount: amount,
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "Inv " + uuidv4().substring(0, 10),
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
     return NextResponse.json({
      status: "success",
      bkashURL: data.bkashURL,
      message: "Course retrieved successfully",
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return NextResponse.json({
      status: "fail",
      message: error.message,
    });
  }
};
