import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { CreateToken } from "@/utility/JwtTokenHelper";
import { headers } from "next/headers";
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
export const GET = async (req, res, next) => {
  try {
    let { searchParams } = new URL(req.url);
    let email = searchParams.get("email") || "";
    let password = searchParams.get("password") || "";
    const result = await prisma.users.findUnique({
      where: { email: email },
    });
    if (!result) {
      return NextResponse.json({
        code: 400,
        status: "fail",
        message: "সঠিক ইমেইল এবং সঠিক পাসওয়ার্ড দিন",
      });
    }
    if (!result?.role == "admin") {
      return NextResponse.json({
        status: "fail",
        message: "Authentication failed",
      });
    }

    const match = await bcrypt.compare(password, result?.password);
    if (!match) {
      return NextResponse.json({
        status: "fail",
        message: "Incorrect password",
      });
    }
    let token = await CreateToken(result["email"], result["id"]);
    let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;
    return NextResponse.json(
      {
        status: "success",
        code: 200,
        user: result,
        token: token,
        message: "user Login successful",
      },
      { status: 200, headers: { "set-cookie": cookieString } }
    );
  } catch (err) {
    console.log(err?.message);
    return NextResponse.json({
      status: "fail",
      code: 4001,
      message: "user Login  fail",
    });
  }
};
