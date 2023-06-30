const User = require("../model/User");
const nodemailer = require("nodemailer");
const emailExistence = require("email-existence");

class EmailController {
  // POST /api/send_recovery_email
  async sendEmail(req, res, next) {
    try {
      var getEmail = await User.findOne({ email: req.body.email });
      emailExistence.check(getEmail.email, function (err, res) {
        console.log("res: " + res);
      });
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASS,
        },
      });
      const mail_configs = {
        from: process.env.MY_EMAIL,
        to: getEmail.email,
        subject: "KODING 101 PASSWORD RECOVERY",
        html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${req.body.OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Koding 101 Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`,
      };
      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log(err);
        } else {
          console.log("Email send succesfully" + info.response);
        }
      });
      const { email } = getEmail._doc;
      res.json(email);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new EmailController();
