import { authneticatedUser, isOwner } from "../middleware/index";
import {
    deleteUsers,
  getAllUsers,
  updateUser
} from "../controller/userController";
import express from "express";

const userRoute = express.Router();
userRoute.get('/allUsers',authneticatedUser,getAllUsers)
userRoute.delete("/deleteUser/:id", authneticatedUser, isOwner, deleteUsers);
userRoute.patch("/update/:id", authneticatedUser, isOwner, updateUser);
export default userRoute;
