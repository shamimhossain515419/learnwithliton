import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { email, verifiedCode } = await req.json();
    const ExistingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!ExistingUser) {
      return NextResponse.json({
        status: 'fail',
        code: 402,
        message: 'could not find user',
      });
    }

    console.log(ExistingUser?.verifiedCode);
    console.log(verifiedCode);

    try {
      if (ExistingUser?.verifiedCode == verifiedCode) {
        const data = {
          verifiedCode: 0,
        };
        const updatedUser = await prisma.user.update({
          where: {
            email: email,
          },
          data,
        });
        return NextResponse.json({
          status: 'success',
          code: 200,
          message: ' Please Check  Your Email',
        });
      } else {
        return NextResponse.json({
          status: 'success',
          code: 200,
          message: ' Veryfication code not match',
        });
      }
    } catch (err) {
      console.log(err);
      if (err.code === 'ECONNREFUSED') {
        return NextResponse.json({
          status: 'success',
          code: 200,
          message: 'Message sent successfully',
        });
        // Handle connection refused error here
      } else {
        // Handle other errors
      }
    }

    // return NextResponse.json({
    //   status: 'success',
    //   code: 200,
    //   message: ' send massage  successfully',
    // });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
