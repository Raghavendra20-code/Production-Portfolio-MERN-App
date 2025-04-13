const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');



const sendEmailController = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Set up transporter (example using Gmail SMTP)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'raghav.manne20@gmail.com',
                pass: 'iqwd ublb stzc sffq' // Use an app password or environment variable
            }
        });

        // Email options
        const mailOptions = {
            from: 'raghav.manne20@gmail.com',
            to: email,
            subject: `Mail from ${name}`,
            text: message
        };

        const info = await transporter.sendMail(mailOptions);

        return res.status(200).send({
            success: true,
            message: 'Your message sent successfully',
            info
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Send email api failed',
            error
        })
    }
}

module.exports = { sendEmailController }