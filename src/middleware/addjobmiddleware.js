import session from "express-session";
export default class Addjobmiddleware {
  addjob(req, res, next) {
    console.log(req.session.userEmail);
    if (req.session.userEmail) {
      next();
    } else {
      res.render("recruitlogin", {
        register: "please Login as Recruiter",
        reqr: req.session.userEmail,
        requ: req.session.userName,
      });
    }
  }
}
