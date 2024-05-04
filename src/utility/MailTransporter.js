// const nodemailer = require('nodemailer');
// export var MailTransporter = nodemailer.createTransport({
//   host: 'live.smtp.mailtrap.io',
//   port: 587,
//   auth: {
//     user: 'api',
//     pass: '070507370412e261ff2ce9b23eba92e9',
//   },
// });

const nodemailer = require('nodemailer');
export var MailTransporter = nodemailer.createTransport({
  service: 'email',
  port: 587,
  auth: {
    user: 'shamimusman515419@gmail.com',
    pass: 'zlpbrocklhsragqw',
  },
});
