// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     let userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({ token, message: "Login successful" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { registerUser, loginUser };
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validate email & password
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // ✅ Find user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Compare password securely
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Check if JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
      return res
        .status(500)
        .json({ message: "Server error: JWT secret is missing" });
    }

    // ✅ Generate JWT token (with user ID)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // ✅ Return token and user details
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
