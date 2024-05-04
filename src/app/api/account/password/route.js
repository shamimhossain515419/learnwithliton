import { VerifyToken } from '../../../../middleware/VerifyJwtToken';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { body } = req.json();
    console.log(body);
    const { email, id } = VerifyToken();

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

    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
    console.log(hashedPassword);

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data,
    });

    return NextResponse.json({
      status: 'success',
      code: 200,
      message: ' Add user successfully',
    });
  } catch (err) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
