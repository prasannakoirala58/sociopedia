const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please tell us your first name'],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: [true, 'Please tell us your last name'],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, 'Please tell us your email'],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please set a password'],
      min: 5,
    },
    picturePath: {
      type: String,
      default: '',
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true } // timestamps are auto generated date when created, updated and so on
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
