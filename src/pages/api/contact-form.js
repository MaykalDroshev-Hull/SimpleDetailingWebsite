import axios from "axios";

const nodemailer = require('nodemailer');

//config
const mailConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASS
  }
};

const adminEmail = 'Lofton Gentry <cary.l.gentry.jr@gmail.com>'

//Function for grabbing template files
async function getPubFile(file) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${file}`)
  return res.data
}

export default async function handler(req, res) {
  sendEmails(req, res)
}

async function sendEmails(req, res) {
  //Create Nodemailer transport handler
  let transporter = nodemailer.createTransport(mailConfig)

  //Fetch template files
  const template = await getPubFile("/email-templates/template.html");
  const custHtml = await getPubFile("/email-templates/customer.html");
  const adminHtml = await getPubFile("/email-templates/admin.html");
  const custTxt = await getPubFile("/email-templates/customer.txt");
  const adminTxt = await getPubFile("/email-templates/admin.txt");

  //Format our recipient email address
  const recipEmail = `<${req.body.email}>`

  //Format our customer-bound email from received form data
  let sendHtml = template.replace('%BODY%', custHtml)
    .replace("%FIRSTNAME%", req.body.firstName)
    .replace('%LASTNAME%', req.body.lastName)
    .replace("%EMAIL%", req.body.email)

  let sendTxt = custTxt
    .replace("%FIRSTNAME%", req.body.firstName)
    .replace('%LASTNAME%', req.body.lastName)
    .replace("%EMAIL%", req.body.email)

  //Send customer-bound email
  let info = await transporter.sendMail({
    from: adminEmail,
    to: recipEmail,
    subject: 'Appointment Request Received',
    text: sendTxt,
    html: sendHtml
  })
  console.log(info)

  if (!info.messageId) {
    res.status(200).json({ status: 0, message: 'Failed to send message!' })
    return false
  }

  sendHtml = template.replace("%BODY%", adminHtml)
    .replace("%FIRSTNAME%", req.body.firstName)
    .replace('%LASTNAME%', req.body.lastName)
    .replace("%EMAIL%", req.body.email)
    .replace('%PHONENUMBER%', req.body.phoneNumber)
    .replace('%CARMAKE%', req.body.carMake)
    .replace('%CARMODEL', req.body.carModel)
    .replace('%DESIREDDATE%', req.body.desiredDate)

  sendTxt = adminTxt
    .replace("%FIRSTNAME%", req.body.firstName)
    .replace('%LASTNAME%', req.body.lastName)
    .replace("%EMAIL%", req.body.email)
    .replace('%PHONENUMBER%', req.body.phoneNumber)
    .replace('%CARMAKE%', req.body.carMake)
    .replace('%CARMODEL', req.body.carModel)
    .replace('%DESIREDDATE%', req.body.desiredDate)

  info = await transporter.sendMail({
    from: recipEmail,
    to: adminEmail, // list of receivers
    subject: "New Appointment Request", // Subject line
    text: sendTxt, // plain text body
    html: sendHtml, // html body
  });

  if (info.messageId) {
    res.status(200).json({ status: 1 });
  } else {
    res.status(200).json({ status: 0, message: "Failed to send message!" });
  }
}