
const sgMail = require('@sendgrid/mail');


const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'learncode@mail.com',
    from: 'learncodetutorial@gmail.com', // Change to your verified sender
    subject: 'Test Subject',
    text: 'Test Message',
    html: '<strong>Test body</strong>',
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
