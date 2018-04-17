const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema ({
  avatarUrl: {type: String, default: ""},
username: {type: String, required: true},
password: {type: String, required: true},
   email: {type: String, required: true},
  active: {type: Boolean, default: true}
}, 
{
  timestamps: {createdAt: "createdAt"}
})

module.exports = mongoose.model('user', userModel);