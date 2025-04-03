
// module.exports = { registerUser, loginUser };
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // ✅ Validate email & password
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password required" });
//     }

//     // ✅ Find user in the database
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Compare password securely
//     const isMatch = bcrypt.compareSync(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Check if JWT_SECRET is defined
//     if (!process.env.JWT_SECRET) {
//       return res
//         .status(500)
//         .json({ message: "Server error: JWT secret is missing" });
//     }

//     // ✅ Generate JWT token (with user ID)
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     // ✅ Return token and user details
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

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

    // ✅ Compare password securely (Use `await bcrypt.compare()`)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Ensure JWT_SECRET is available
    const jwtSecret = process.env.JWT_SECRET || "default_secret_key";

    // ✅ Generate JWT token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "1h" });

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


exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validate email & password
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // ✅ Save user to database
    await newUser.save();

    // ✅ Ensure JWT_SECRET is available
    const jwtSecret = process.env.JWT_SECRET || "default_secret_key";

    // ✅ Generate JWT token
    const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: "1h" });

    // ✅ Return token & user details
    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
