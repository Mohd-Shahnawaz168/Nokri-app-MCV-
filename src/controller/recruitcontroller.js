import RecruiterModel from "../model/recruitermode.js";
import jobAvailable from "../model/model.js";

export default class RecruitController {
  recruitGetLogin(req, res) {
    res.render("recruitlogin", {
      register: null,
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
  recruitGetRegister(req, res) {
    res.render("recruitregister", {
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }

  recruitRegister(req, res) {
    const registering = RecruiterModel.doregister(req.body);
    res.render("recruitlogin", {
      register: "Registration Successful!",
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }

  recruitLogin(req, res) {
    const verifyinguser = RecruiterModel.verify(req.body);
    // console.log(req.body);
    if (verifyinguser) {
      req.session.userEmail = req.body.email; // creating session after login
      // console.log(req.session.userEmail);
      return res.render("home", {
        reqr: req.session.userEmail,
        requ: req.session.userName,
      });
    } else {
      res.render("recruitlogin", {
        register: "Login Failed!",
        reqr: req.session.userEmail,
        requ: req.session.userName,
      });
    }
  }

  addJob(req, res) {
    res.render("addjob", {
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }

  addnewjob(req, res) {
    let jobList = jobAvailable.jobs();
    let adding = jobAvailable.addingjob(req.body);
    res.render("jobAvailable", {
      jobList: jobList,
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
  updatejob(req, res) {
    //console.log(req.body);
    let updatedata = jobAvailable.updatejob(req.body);
    //console.log(updatedata);
    res.render("jobAvailable", {
      jobList: updatedata,
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
}
