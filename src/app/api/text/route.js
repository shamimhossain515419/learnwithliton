import { NextResponse } from 'next/server';
import emailValidator from 'email-validator';
export const POST = async (req, res) => {
  try {
    const { email } = await req.json();
    const data = await emailValidator.validate(email);
    return NextResponse.json({
      status: 'fail',
      data: `Email ${data} is invalid: ${data}`,
      message: 'email is invalid',
    });
  } catch (e) {
    return NextResponse.json({
      status: 'fail',
      data: e,
      message: e.message,
    });
  }
};
