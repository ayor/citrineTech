
const nodemailer = require("nodemailer");

const _usermail = "dosumuayomide@gmail.com"
const _hashedpass = "$2a$12$3Js.5o2PCEDVd.cHxPQOZOZEZADLzpo/8lq4XLrz7.kG7AW5c586e";

const _userpass = process.env.PASS;



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: _usermail, // generated ethereal user
        pass: _userpass, // generated ethereal password
    },
});


const messageHandler = async (req, res) => {
    try {
        if (req.method !== 'POST') {
            res.status(400).send({ message: 'Only POST requests allowed' })
            return
        }
        const { name, email, phone, message } = (req.body);
        let info = await transporter.sendMail({
            from: email, // sender address
            to: _usermail, // list of receivers
            subject: `Message from ${name}<${email}>`, // Subject line
            text: `
            ${name} with email - <${email}>
            and Phone number:${phone} said
            ${message} 
            `, // plain text body
        });
        console.log(info)
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.status(200).json({
            message: "successfully sent your message",
            messageId: info.messageId
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occured while sending your email, kindly try again",
            error
        })
    }
}

export default messageHandler; 