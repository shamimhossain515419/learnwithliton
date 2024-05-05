import nodemailer from 'nodemailer';
export const EmailSend = async (sendEmail, subject, text, html) => {
  const authData = await nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
      user: process.env.APP_EMIL,
      pass: process.env.APP_PASS,
    },
  });

  const info = await authData.sendMail({
    from: process.env.APP_EMIL,
    to: sendEmail,
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
  console.log(info.messageId);
  if (info.messageId) {
    return true;
  }
};
