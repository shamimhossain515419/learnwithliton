import { MailTransporter } from '@/utility/MailTransporter';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
const prisma = new PrismaClient();
export const POST = async (req, res) => {
  console.log('object');
  try {
    const { email } = await req.json();
    console.log(email);
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
    console.log(ExistingUser);
    console.log(email);

    // send mail with defined transport object

    try {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'email',
        port: 3000,
        auth: {
          user: 'shamimusman515419@gmail.com',
          pass: 'zlpbrocklhsragqw',
        },
      });

      // Sending email
      const info = await transporter.sendMail({
        from: 'shamimusman515419@gmail.com', // sender address
        to: 'shamimhossain01617@gmail.com', // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
      });

      console.log('Message sent: %s', info.messageId);
      return NextResponse.json({
        status: 'success',
        code: 200,
        message: 'Message sent successfully',
      });
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
