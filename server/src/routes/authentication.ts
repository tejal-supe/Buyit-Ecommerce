import { authController } from "../controller/authenticationController";
import express from "express";

const route = express.Router();

route.post('/createUser', authController)
 
export default route;