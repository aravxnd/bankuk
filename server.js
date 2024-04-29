require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');  // Ensure the path is correct
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI,);

app.post('/api/register', async (req, res) => {
  try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
          username: username,
          password: hashedPassword
      });
      await newUser.save();
      res.status(201).send("User created successfully");
  } catch (error) {
      res.status(500).send("Server error: " + error.message);
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
