const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors")({
  origin: true
});

exports.sendEmail = functions.https.onRequest((req, res) => {

  const { to, from, subject, message, user, password } = req.body;
  return cors(req, res, () => {
    var text = `<p>${message}</p>`;

    var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
          user: user,
          pass: password
      }
    }));

    const mailOptions = {
      to: to,
      from: from,
      subject: subject,
      text: text,
      html: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        return res.send(error.toString());
      } else {
        var data = JSON.stringify(info);
        return res.send(data);
      }
    });
  });
});