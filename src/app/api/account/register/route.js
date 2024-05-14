import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import { generateRandomFileName } from '../../../../utility/generateRandomFileName';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const data = await req.formData();
    const file = data.get('photo') || File;
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const phone = Number(data.get('phone')) || '';
    const term = Boolean(data.get('term')) || false;
    const password = data.get('password') || '';
    const gender = data.get('gender') || '';
    const address = data.get('address') || '';
    const discord = data.get('discord') || '';

    const ExistingUser = await prisma.users.findUnique({
      where: { email: email },
    });
    // upload image start
    if (ExistingUser) {
      return NextResponse.json({
        status: 'fail',
        code: 402,
        message: 'Email already use',
      });
    }
    if (!file?.name) {
      return NextResponse.json({ status: false });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const randomFileName = generateRandomFileName(file.name);
    const path = `public/uploads/users/${randomFileName}`;
    await fs.writeFile(path, buffer);
    // password generate
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
    console.log(hashedPassword);

    const user = await prisma.users.create({
      data: {
        name,
        term,
        password: hashedPassword,
        gender,
        discord,
        address,
        email,
        phone,
        photo: randomFileName,
      },
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
