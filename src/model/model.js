export default class jobAvailable {
  constructor(
    id,
    jobCategory,
    jobDesignation,
    jobLocation,
    companyName,
    salary,
    applyBy,
    skillsRequired,
    numberOfOpening,
    jobPosted,
    applicants
  ) {
    this.id = id;
    this.jobCategory = jobCategory;
    this.jobDesignation = jobDesignation;
    this.jobLocation = jobLocation;
    this.companyName = companyName;
    this.salary = salary;
    this.applyBy = applyBy;
    this.skillsRequired = skillsRequired;
    this.numberOfOpening = numberOfOpening;
    this.jobPosted = jobPosted;
    this.applicants = applicants;
  }
  static jobs() {
    return jobs;
  }

  static addingjob(data) {
    let newdata = new jobAvailable(
      data.id,
      data.jobCategory,
      data.jobDesignation,
      data.jobLocation,
      data.companyName,
      data.salary,
      data.applyBy,
      data.skillsRequired.split(","),
      data.numberOfOpening,
      data.jobPosted,
      data.applicants
    );

    jobs.push(newdata);
    return true;
  }

  static fetchJob(id) {
    let data = jobs.find((p) => p.id == id);
    return data;
  }
  static updatejob(bodyy) {
    //console.log(jobs[1]);
    let finddata = jobs.findIndex((p) => {
      //console.log(p);
      return p.id == bodyy.id;
    });
    console.log(finddata);

    jobs[finddata] = new jobAvailable(
      bodyy.id,
      bodyy.jobCategory,
      bodyy.jobDesignation,
      bodyy.jobLocation,
      bodyy.companyName,
      bodyy.salary,
      bodyy.applyBy,
      bodyy.skillsRequired.split(","),
      bodyy.numberOfOpening,
      bodyy.jobPosted,
      bodyy.applicants
    );
    console.log(jobs);
    return jobs;
  }
  static applyfor(id) {
    let data = jobs.find((p) => p.id == id);
    return data;
  }
}
let date = new Date();
let jobs = [
  new jobAvailable(
    1,
    "Web Developer",
    "Senior Enginer",
    "Delhi",
    "Infosys",
    65000,
    date,
    ["HTML", "CSS", "JS", "REACT"],
    5,
    "2024-08-20",
    5
  ),
  new jobAvailable(
    2,
    "Web Developer",
    "Enginer",
    "Noida",
    "Tcs",
    45000,
    date,
    ["HTML", "CSS", "JS"],
    2,
    "2024-08-18",
    5
  ),
  new jobAvailable(
    3,
    "Software Engineer",
    "Engineer",
    "Gurugram",
    "Cognizent",
    72000,
    date,
    ["JS", "AWS", "PYTHON"],
    7,
    "2024-08-15",
    12
  ),
];
