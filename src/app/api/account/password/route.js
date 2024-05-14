import { VerifyToken } from '../../../../middleware/VerifyJwtToken';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
export const POST = async (req, res) => {
  try {
    const { oldPasword: password, newPassword } = await req.json();

    const { email, id } = await VerifyToken();

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
    const match = await bcrypt.compare(password, ExistingUser?.password);

    if (!match) {
      return NextResponse.json({
        status: 'fail',
        message: 'Please Enter Right  password',
      });
    }
    // bcrypt sring  data make
    const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the saltRounds

    //  update user
    const updatedUser = await prisma.users.update({
      where: {
        id: id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      status: 'success',
      code: 200,
      message: ' Password Change  successfully',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
