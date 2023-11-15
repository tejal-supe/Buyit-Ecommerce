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

export const loginController = async (req: express.Request, res: express.Response) => {
    try{
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUsersByMail(email).select('+authentication.salt +authentication.password');

    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);
    
    if (user.authentication.password != expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    res.cookie('AUTHENTICATION', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
    
}       