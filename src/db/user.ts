import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type:String, required: true},

    authentication:{
        password: {
            type: String,
            required:true,
            select: false
        },
       salt:  { type:String, select:false},
       sessionToken: {
        type: String, select:false
       },

    }
})

export const UserModel = mongoose.model('User', userSchema);

export const getUserEmail= (email: string)=> UserModel.findOne({email});
export const getUserBySessionToken =(sessionToken: string)=> UserModel.findOne({
    'authentication.sessionToken': sessionToken,
})