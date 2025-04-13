const nodemailer = require('nodemailer');



const sendEmailController = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const recipeintMessage = `Hello ${name},\nThank you so much for taking the time to explore my portfolio application. I really appreciate your interest, and I’m glad you had the chance to go through it.

        I’ll be reviewing your message and will get back to you shortly with more details. In the meantime, please don’t hesitate to reach out if you have any questions or need anything else from my side.
        
        Looking forward to connecting again soon! \n\nBest regards,\nRaghavendra Manne\n7410150656`

        // Set up transporter (example using Gmail SMTP)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASSWORD // Use an app password or environment variable
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: `Your mail recieved`,
            text: recipeintMessage
        };

        const myMailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Mail from ${name}`,
            text: `${message}\nMail ID: ${email}`
        }

        const info = await transporter.sendMail(mailOptions);

        await transporter.sendMail(myMailOptions);

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