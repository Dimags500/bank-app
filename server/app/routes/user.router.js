import express from "express";
import {
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
  createUser,
} from "../controllers/user.controllers.js";
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);

userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUserById);
userRouter.delete("/:id", deleteUserById);
export { userRouter };
