const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userModel = new Schema({
  avatarUrl: { type: String, default: "" },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        //regex check email hop le
        return
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      },
      message: "{VALUE} is not a valid email address"
    }
  },
  active: { type: Boolean, default: true }
},
  {
    timestamps: { createdAt: "createdAt" }
  })

userModel.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt
    .genSalt(12)
    .then(salt => bcrypt.hash(this.password, salt))
    .then(result => {
      this.password = result;
      next();
    })
    .catch(err => next(err));  //doan code ki la-khong dung chuan-hay tim hieu them// neu k truyen tham so thi chay tien trinh tiep theo // neu truyen tham so thi tra ve loi
})

module.exports = mongoose.model('users', userModel);