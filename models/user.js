const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  store: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  transactionType: {
    type: String,
    required: true
  },
  starred: {
    type: Boolean,
    required: true
  }
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  transactions: [transactionSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
