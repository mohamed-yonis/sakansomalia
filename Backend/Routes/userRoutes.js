import express from "express";
import {
  registerUser,
  login,
  logout,
  getUsers,
} from "../Controllers/Usercontroller.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/getusers", getUsers);
userRouter.post("/logout", logout);

export default userRouter;
