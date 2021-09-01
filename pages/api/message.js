
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

const _usermail = "dosumuayomide@gmail.com"
const _hashedpass = "$2a$12$3Js.5o2PCEDVd.cHxPQOZOZEZADLzpo/8lq4XLrz7.kG7AW5c586e";

const _userpass = process.env.PASS;



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: _usermail,
    pass: _userpass
  }
});


const messageHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(400).json({ message: 'Only POST requests allowed' })
      return
    }

    const { name, email, phone, message, captchaCode } = (req.body);

    if (!captchaCode || !name || !email || !phone || !message) {
      res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
      return;
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_PUBLIC_SECRET_KEY}&response=${captchaCode}
      `,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );


    const captchaValidation = await response.json();
    console.log(captchaValidation)
    /**
     * The structure of response from the veirfy API is
     * {
     *  "success": true|false,
     *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
     *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
     *  "error-codes": [...]        // optional
      }
     */

    if (captchaValidation.success) {
      // Replace this with the API that will save the data received
      // to your backend
      // let info = await transporter.sendMail({
      //     from: email, // sender address
      //     to: _usermail, // list of receivers
      //     subject: `Message from ${name}<${email}>`, // Subject line
      //     text: `
      //     ${name} with email - <${email}>
      //     and Phone number:${phone} said
      //     ${message} 
      //     `, // plain text body
      // });
      // console.log(info);
      // console.log("Message sent: %s", info.messageId);
      // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // // Preview only available when sending through an Ethereal account
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.status(200).json({
        message: "successfully sent your message",
        // messageId: info.messageId
      })
    } else {
      throw new Error("invalid Secret ")
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occured while sending your email, kindly try again",
      error
    })
  }
}

export default messageHandler;