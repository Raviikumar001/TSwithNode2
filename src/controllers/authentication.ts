import express from 'express';

import { getUserEmail, createUser } from 'db/user';
import { random, authentication } from 'helpers';

export const register = async(req: express.Request, res: express.Response)=>{

    try{
        const {email,password, username} = req.body;

        if(!email || !password || !username){
            return res.sendStatus(400);
        }

        const existingUser = await getUserEmail(email);

        if(existingUser){
            return res.sendStatus(400);
        }

        const salt = random();
        console.log(random);
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication (salt, password)
            },

        })
        return  res.status(200).json(user).end();
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);  
    }   

}