const users = require ('./users');


module.exports = {
  getUser() {},

  postUser(email, password) {
    let index = users.Users.length;
    users[index] = {index, email, password};
      return;
    }
  },

}
