const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: validator.isEmail,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },

  confirmPassword: {
    type: String,
    required: true,
    validate: function(elem) {
        return elem === this.password;
    }
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
