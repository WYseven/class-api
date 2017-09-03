const mongoose = require('mongoose');
let userDataSchema = new mongoose.Schema;

userDataSchema.add({
  userName:{
    type: String,
    default: '',
    required: true
  },
  age:{
    type: Number,
    default: '',
    required: true
  },
  sex:{
    type: String,
    default: '',
    required: true
  }
})

var userModel = mongoose.model('testUsers', userDataSchema);

let usersObj = new userModel();

module.exports = {
  usersObj,
  userModel
}



