import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
export const PUT = async (req, res) => {
  try {
    const { email, password } = await req.json();

    const ExistingUser = await prisma.users.findUnique({
      where: { email: email },
    });
    if (!ExistingUser) {
      return NextResponse.json({
        status: 'fail',
        code: 402,
        message: 'could not find user',
      });
    }

    // bcrypt sring  data make
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

    //  update user
    const updatedUser = await prisma.users.update({
      where: {
        email: email,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      status: 'success',
      code: 200,
      message: ' New password set successfully',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
