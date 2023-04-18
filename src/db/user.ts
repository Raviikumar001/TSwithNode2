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
});

export const getUserById = (id: string) => UserModel.findById(id);   
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id});

export const updateUserById =(id: string,values : Record<string, any>) => UserModel.findByIdAndUpdate(id,values);