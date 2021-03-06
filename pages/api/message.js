
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");

const _usermail = "citrinetechltd@gmail.com"

const _userpass = process.env.PASS;



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  host:'smtp.gmail.com',
  secure: true,
  auth: {
    user: _usermail,
    pass: _userpass
  }
});
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

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

    if(!validateEmail(email)){
      const err =  new Error(); 
        err.status = 500; 
        err.message = "Suspicious Entry, please try again later"; 
        throw err; 
    }
    

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_SECRET_KEY}&response=${captchaCode}
      `,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );


    const captchaValidation = await response.json();
    /**
     * The structure of response from the veirfy API is
     * {
     *   "success": true|false,      // whether this request was a valid reCAPTCHA token for your site
     *   "score": number             // the score for this request (0.0 - 1.0)
     *   "action": string            // the action name for this request (important to verify)
     *   "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
     *   "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
     *   "error-codes": [...]        // optional
}
     */

    if (captchaValidation.success) {
      if(captchaValidation.score >= process.env.NEXT_THRESHOLD){
      // Replace this with the API that will save the data received
      // to your backend
      let info = await transporter.sendMail({
          from: email, // sender address
          to: "info@citrinetechltd.com", // list of receivers
          subject: `Message from Website - 
           ${name} <${email}>`, // Subject line
          text: ` 
          ${name} with email - <${email}>
          and Phone number:${phone} says:
          ${message} 
          `, // plain text body
      });
      console.log(info);
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.status(200).json({
          message: "successfully sent your message",
          // messageId: info.messageId
        })
      }else{
        const err =  new Error(); 
        err.status = 500; 
        err.message = "Suspicious Entry, please try again later"; 
        throw err; 
      }
    } else {
      let error = new Error("Suspicious entry, please try again with valid credentials");
      error.status = 500; 
      throw error;
    }

  } catch (error) {
    console.log(error);
    if(error.status){
      res.status(error.status).json({
        message: error.message,
        error
      })
    }else{
      res.status(500).json({
        message: "An error occured while sending your email, kindly try again",
        error
      })
    }
   
  }
}

export default messageHandler;