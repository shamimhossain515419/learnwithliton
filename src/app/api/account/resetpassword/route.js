import { EmailSend } from '@/utility/EmailSend';
import { generateRandomNumericCode } from '@/utility/generateRandomNumericCode';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export const POST = async (req, res) => {
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
        message: 'ইমেইল খুঁজে পাওয়া যাচ্ছে না সঠিকভাবে ব্যবহার করো',
      });
    }

    // send mail with defined transport object

    try {
      // Create a Nodemailer transporter
      const sendEmail = email;
      const code = generateRandomNumericCode();
      const subject = 'Reset password For ASIAN IT INC';
      const text = 'reset password ';
      const html = `  <div>
          <h2> verify  Code: </h2>
          <h2>  ${code} </h2>
        </div> `;
      const data = { verifiedCode: code };
      // const email send
      const SendEmailResult = await EmailSend(sendEmail, subject, text, html);
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
