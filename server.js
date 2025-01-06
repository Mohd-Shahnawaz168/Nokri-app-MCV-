import express from "express";
import RecruitController from "./src/controller/recruitcontroller.js";
import UserController from "./src/controller/usercontroller.js";
import Controller from "./src/controller/controller.js";
import expressEjsLayouts from "express-ejs-layouts";
import ejs from "ejs";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";
let server = express();

import Addjobmiddleware from "./src/middleware/addjobmiddleware.js";
const addjobmiddleware = new Addjobmiddleware();
const controller = new Controller();
const usercontroller = new UserController();
const recruitcontroller = new RecruitController();
//use session
server.use(
  session({
    secret: "keybord cat",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// set view to render ejs(html) file
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));
// use static view
server.use(express.static(path.resolve()));
//use layout middleware
server.use(expressEjsLayouts);
// use body parser to get data from form
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

//for user login and registration
server.get("/login", usercontroller.getLogin);
server.get("/register", usercontroller.getRegister);
server.post("/register", usercontroller.register);
server.post("/login", usercontroller.login);

//for recruiter login and register
server.get("/recruitlogin", recruitcontroller.recruitGetLogin);
server.get("/recruitregister", recruitcontroller.recruitGetRegister);
server.post("/recruitregister", recruitcontroller.recruitRegister);
server.post("/recruitlogin", recruitcontroller.recruitLogin);

server.get("/", controller.gethome);
server.get("/displayjob", controller.displayJob);

//postnewjob
server.get("/postnewjob", addjobmiddleware.addjob, recruitcontroller.addJob);
server.post("/postnewjob", recruitcontroller.addnewjob);

//logout
server.get("/logout", usercontroller.logout);

//update
server.get("/update/:id", controller.apply);
server.post("/updatejob", recruitcontroller.updatejob);

//apply
server.get("/apply/:id", usercontroller.jobapply);
server.post("/applyjob", usercontroller.apply);

server.listen("3400", () => {
  console.log("server is listening at port 3400");
});
