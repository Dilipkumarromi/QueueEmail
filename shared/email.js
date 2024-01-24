const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
var trap = require('nodemailer-trap-plugin').trap;
const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser
/**
 *
 * @param {*} toEmail => to-email id
 * @param {*} name
 * @param {*} subject
 * @param {*} token
 * @param {*} html_emailFormat
 * @param {*} sendEmailType => 1. no-reply, 2. normal email
 */

const sendEmail = async (
  toEmail,
  name,
  subject,
  html_emailFormat,
  token = "",
  sendEmailType = ""
) => {
  
  var transport = nodemailer.createTransport({
    
    host: process.env.SEND_SMTP_HOST,
    port: process.env.SEND_SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SEND_SMTP_USERNAME_NO_REPLY,
      pass: process.env.SEND_SMTP_PASSWORD,
    },
    debug: true, // show debug output
    // logger: true
  });
  transport.use('compile', trap({
    to: 'r58923uiewroddkjrlwkejmi.insdfdandfsdf11@gmail.com',
    passthrough: '@gmail.com'
  }));
  let mailOptions = {
    from: process.env.SEND_SMTP_FROM_NO_REPLY,
    to: "r58923uiewroddkjrlwkejmi.insdfdandfsdf11@gmail.com",
    subject: `${toEmail},${subject}`,
    text: `${toEmail} verification by test account`,
    html: `${html_emailFormat}`,
    dsn: {
        id: 'some random message specific id',
        return: 'headers',
        Action: '',
        recipient: 'r58923uiewroddkjrlwkejmi.insdfdandfsdf11@gmail.com'
    }
  };
 
 await transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
      return error;
    }
    console.log("Message sent: %s", info);
    return info.messageId
  });
};
const utilityApps = { sendEmail };
module.exports = utilityApps;
