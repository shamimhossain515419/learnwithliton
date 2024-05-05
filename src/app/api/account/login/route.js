import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { CreateToken } from '../../../../utility/JwtTokenHelper';
import { VerifyPassword } from '../../../../utility/VerifyPassword';
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
export async function POST(req, res) {
  try {
    let { email, password } = await req.json();
    console.log(email, password);
    const result = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!result) {
      return NextResponse.json({
        code: 400,
        status: 'fail',
        message: 'সঠিক ইমেইল এবং সঠিক পাসওয়ার্ড দিন',
      });
    }

    const match = await bcrypt.compare(password, result?.password);

    if (!match) {
      return NextResponse.json({
        status: 'fail',
        message: 'Incorrect password',
      });
    }
    // check password end
    if (!result.email) {
      return NextResponse.json({ status: 'fail', data: result });
    } else {
      let token = await CreateToken(result['email'], result['id']);
      let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;
      return NextResponse.json(
        {
          status: 'success',
          code: 200,
          user: result,
          token: token,
          message: 'user Login successful',
        },
        { status: 200, headers: { 'set-cookie': cookieString } }
      );
    }
  } catch (e) {
    return NextResponse.json({
      status: 'fail',
      data: e,
      message: e.message,
    });
  }
}
