import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { VerifyToken } from '../../../../middleware/VerifyJwtToken';
import { generateRandomFileName } from '../../../../utility/generateRandomFileName';
const fs = require('fs').promises;
const path = require('path');
import { unlink } from 'fs/promises';
const prisma = new PrismaClient();
export async function GET(req, res) {
  try {
    // verify token
    const { email, id } = await VerifyToken();
    if (!email) {
      return NextResponse.json({
        status: 'fail',
        code: 401,
        message: ' verification failed',
      });
    }
    //  find user
    const result = await prisma.users.findUnique({
      where: { email: email },
    });

    // and resultn
    if (!result.email) {
      return NextResponse.json({ status: 'fail', data: result });
    } else {
      return NextResponse.json({
        status: 'success',
        code: 200,
        user: result,
      });
    }
  } catch (error) {
    return NextResponse.json({ status: 'fail', data: error });
  }
}

//  update user

export const PUT = async (req, res) => {
  try {
    const formDataValue = await req.formData();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id'));
    const name = formDataValue.get('name') || '';
    const email = formDataValue.get('email') || '';
    const phone = Number(formDataValue.get('phone')) || 0;
    const address = formDataValue.get('address') || '';
    const discord = formDataValue.get('discord') || '';
    const file = formDataValue.get('photo') || File;

    // Fetch the client data to get the current image filename
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return NextResponse.json({
        message: 'user not found',
        code: 404,
      });
    }
    console.log(user);

    let imagePath = ''; // Variable to store the path of the new image
    let randomFileName = user.photo; // Initialize with the current image filename

    if (file?.name) {
      // Delete the old image file
      imagePath = `public/uploads/users/${user.photo}`;
      await unlink(imagePath);
      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = `public/uploads/users/${randomFileName}`;
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    const data = {
      name,
      photo: randomFileName,
      discord,
      address,
      phone,
      email,
    };
    console.log(data);
    // Update the client data in the database
    const updatedUser = await prisma.users.update({
      where: {
        id: id,
      },
      data,
    });

    return NextResponse.json({
      status: 'success',
      message: 'user Updated Successfully',
      code: 200,
    });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

export const DELETE = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id'));
    // / Fetch the client data to get the current image filename
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    // Delete the old image file
    let imagePath = `public/uploads/users/${user.photo}`;
    await unlink(imagePath);

    const updatedUser = await prisma.users.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      status: 'success',
      message: 'user delete Successfully',
      code: 200,
    });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
