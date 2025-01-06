export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static doregister(user) {
    let users = new UserModel(
      userdata.length + 1,
      user.name,
      user.email,
      user.password
    );
    userdata.push(users);
    //console.log(userdata);
    return userdata;
  }

  static verify(data) {
    let result = false;
    const checkinguser = userdata.find((p) => {
      return p.email == data.email && p.password == data.password;
    });
    return checkinguser;
  }
}
let userdata = [];
