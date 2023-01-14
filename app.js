require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
//const path = require("path");
const nodemailer = require("nodemailer");
// const { contact } = require("./contact");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Team accolade"));

app.get('https://advocate-health-care-6uah-olumegbon.vercel.app/', bodyParser)
async function mainMail(name, email, number, message) {
  const transporter = await nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  
  const mailOption = {
    from: email,
    to: process.env.EMAIL,
    subject: name,
    html: `You got a message from 
    Email : ${email} <br>
    Name: ${name} <br>
    Number: ${number} <br>
    Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

app.post("https://advocate-health-care-6uah-olumegbon.vercel.app/", async (req, res, next) => {
  const { name, email, number, message } = req.body;
  try {
    await mainMail(name, email, number, message);

    res.sendFile(__dirname + "/Team accolade/success.html");
  } catch (error) {
    console.log(error);
    res.sendFile(__dirname+ "/Team accolade/failure.html");
  }
});

//app.listen(process.env.port, () => console.log("Server is running!"));
