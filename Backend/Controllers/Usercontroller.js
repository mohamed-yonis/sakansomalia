import user from "../Models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  const { full_name, user_name, password } = req.body;

  try {
    // inputs are required
    if (!full_name || !user_name || !password) {
      return res.json({ success: false, message: "all fields required" });
    }
    const isexist = await user.findOne({ user_name: user_name });
    if (isexist) {
      return res.json({ success: false, message: "user already exists" });
    }

    const hasspassword = await bcrypt.hash(password, 10);
    const newuser = new user({
      full_name: full_name,

      user_name: user_name,
      password: hasspassword,
    });
    newuser.save();

    // generating tokens
    const token = jwt.sign({ id: newuser._id }, process.env.SECRET_KEY, {
      expiresIn: "3d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.node_env === "production",
      sameSite: process.env.node_env === "production" ? "none" : "strict",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, message: "user saved successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { user_name, password } = req.body;
  if (!user_name || !password) {
    return res.json({ success: false, message: "All fields are required" });
  }
  //   check if the user exists
  const isexisting = await user.findOne({ user_name });
  if (!isexisting) {
    return res.json({ success: false, message: "User not found" });
  }
  // check if the password is correct  (compare hashed password with the input password)  using bcrypt.compare() method
  const ismatch = await bcrypt.compare(password, isexisting.password);
  if (!ismatch) {
    return res.json({ success: false, message: "Incorrect password" });
  }
  try {
    // generating tokens
    const token = jwt.sign({ id: isexisting._id }, process.env.SECRET_KEY, {
      expiresIn: "3d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.node_env === "production",
      sameSite: process.env.node_env === "production" ? "none" : "strict",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true, message: "Logged in successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.node_env === "production",
    sameSite: process.env.node_env === "production" ? "none" : "strict",
    maxAge: 0, // delete the cookie immediately
  });
  return res.json({ success: true, message: "Logged out successfully" });
};

export const getUsers = async (req, res) => {
  try {
    const users = await user.find(); // Soo qaado dhammaan users-ka
    return res.json({ success: true, users });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

