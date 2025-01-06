import UserModel from "../model/usermodel.js";
import jobAvailable from "../model/model.js";
import Sendmail from "./applymail.js";

let jobdata;
export default class UserController {
  getLogin(req, res) {
    res.render("login", {
      register: null,
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }

  getRegister(req, res) {
    res.render("register", {
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
  register(req, res) {
    const registering = UserModel.doregister(req.body);
    res.render("login", {
      register: "Registration Successful!",
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
  login(req, res) {
    //console.log(req.body);
    const verifyinguser = UserModel.verify(req.body);
    if (verifyinguser) {
      req.session.userName = req.body.email; // creating session after login
      return res.render("home", {
        reqr: req.session.userEmail,
        requ: req.session.userName,
      });
    } else {
      res.render("login", {
        register: "Login Failed!",
        reqr: req.session.userEmail,
        requ: req.session.userName,
      });
    }
  }

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/login");
      }
    });
  }
  jobapply(req, res) {
    let updatedata = jobAvailable.applyfor(req.params.id);
    jobdata = updatedata;
    res.render("applyform", {
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
  apply(req, res) {
    let jobdesc = req.body.Description;
    let applyjobdata = jobdata;
    let mailsent = Sendmail.sent(jobdesc, applyjobdata);
    res.send("apply successfully");
  }
}
