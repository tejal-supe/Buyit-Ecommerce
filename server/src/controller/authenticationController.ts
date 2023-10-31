import { createUser, getUsersByMail } from "../db/user";
import express from "express"
import { authentication, random } from "../helpers";

export const authController = async(req: express.Request, res: express.Response) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
          return  res.sendStatus(400);
        }
        const userExists = await getUsersByMail(email);
        if (userExists) {
             return res.sendStatus(400);
        }

        const salt = random();
        const auth = authentication(salt, password);
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password : auth
            }
        })
        return res.status(200).json(user).end()
        
        
    } catch (error) {
        console.log(error);
       return res.sendStatus(400);
    }
    
}