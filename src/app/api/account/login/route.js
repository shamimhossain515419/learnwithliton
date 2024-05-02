import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { CreateToken } from '../../../../utility/JwtTokenHelper';

const prisma = new PrismaClient();
export async function POST(req, res) {
  try {
    let { email, password } = await req.json();
    const result = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!result.email) {
      return NextResponse.json({ status: 'fail', data: result });
    } else {
      let token = await CreateToken(result['email'], result['id']);
      let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;
      console.log(result);
      return NextResponse.json(
        {
          status: 'success',
          code: 200,
          user: result,
          token: token,
        },
        { status: 200, headers: { 'set-cookie': cookieString } }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: 'fail', data: e });
  }
}
