import jobAvailable from "../model/model.js";
export default class Controller {
  gethome(req, res) {
    res.render("home", {
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }

  displayJob(req, res) {
    let jobList = jobAvailable.jobs();
    res.render("jobAvailable", {
      jobList: jobList,
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
  apply(req, res) {
    let fetcheddata = req.params.id;
    let data = jobAvailable.fetchJob(fetcheddata);
    //console.log(data);
    res.render("updatejob", {
      data,
      reqr: req.session.userEmail,
      requ: req.session.userName,
    });
  }
}
