// seed/SeedUsers.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const connectDB = require("../config/db.js");
const User = require("../models/AdminUser.js");

dotenv.config();

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "password", // will be hashed
    role: "admin",
  },
  {
    name: "Editor User",
    email: "editor@example.com",
    password: "password",
    role: "editor",
  },
  {
    name: "Staff User",
    email: "staff@example.com",
    password: "password",
    role: "staff",
  },
];

const seedUsers = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    console.log(" Existing users removed.");

    const userPromises = users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return User.create({ ...user, password: hashedPassword });
    });

    await Promise.all(userPromises);

    console.log(" Default users added to MongoDB.");
    process.exit();
  } catch (err) {
    console.error(" Error seeding users:", err.message);
    process.exit(1);
  }
};

seedUsers();
