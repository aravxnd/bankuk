// models/Notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  message: String,
  date: Date,
  seen: { type: Boolean, default: false }
});

module.exports = mongoose.model('Notification', notificationSchema);
