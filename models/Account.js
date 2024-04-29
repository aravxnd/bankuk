// models/Account.js
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  balance: Number,
  accountNumber: String,
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
});

module.exports = mongoose.model('Account', accountSchema);
