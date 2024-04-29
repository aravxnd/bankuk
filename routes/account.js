// routes/account.js
const express = require('express');
const Account = require('../models/Account');
const router = express.Router();

router.get('/summary/:userId', async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.params.userId }).populate('transactions');
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/transactions/recent/:accountId', async (req, res) => {
    try {
      const { accountId } = req.params;
      const transactions = await Transaction.find({ account: accountId }).sort({ date: -1 }).limit(5);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/notifications/:userId', async (req, res) => {
    try {
      const notifications = await Notification.find({ userId: req.params.userId, seen: false });
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
