import { authController, loginController } from "../controller/authenticationController";
import express from "express";

const route = express.Router();

route.post('/createUser', authController)
route.post('/login',loginController)
export default route;