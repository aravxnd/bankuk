// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  amount: Number,
  description: String,
  date: Date,
  type: String  // e.g., 'debit', 'credit'
});

module.exports = mongoose.model('Transaction', transactionSchema);
