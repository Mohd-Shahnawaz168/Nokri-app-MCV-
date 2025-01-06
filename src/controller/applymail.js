import nodemailer from "nodemailer";
export default class Sendmail {
  static sent(jobdesc, applyjobdata) {
    let data = JSON.stringify(applyjobdata);
    //console.log(data);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
      },
    });
    let maildata = {
      from: "codingninjas2k16@gmail.com",
      to: "shahnawazarham891@gmail.com",
      subject: "Applying for given post!",
      text: `${data}/n please find attached data ${jobdesc}`,
    };
    try {
      let sent = transporter.sendMail(maildata);
    } catch (error) {
      console.log(error);
    }
  }
}
