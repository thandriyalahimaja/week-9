import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { UserTypeModel } from "../models/UserModel.js"
import { config } from "dotenv"
config();


//register function
export const register =async(userObj)=>{
    if (userObj?.email) {
        userObj.email = userObj.email.trim().toLowerCase();
    }
    if (userObj?.role) {
        userObj.role = userObj.role.trim().toUpperCase();
    }
    //create document
    const userDoc =new UserTypeModel(userObj);
    //validate for empty passwords
    await userDoc.validate();
    //hash and replace the plain passsword
    userDoc.password=await bcrypt.hash(userDoc.password,10);
    //save
    const created=await userDoc.save();
    //convert document to object to remove password
    const newUserObj=created.toObject();
    //remove password
    delete newUserObj.password;
    //return user obj without password
    return newUserObj;
};

//authentication function
export const authenticate=async ({email,password,role})=>{
    const normalizedEmail = email?.trim().toLowerCase();
    const normalizedRole = role?.trim().toUpperCase();

    if (!normalizedEmail || !password || !normalizedRole) {
        const err=new Error("email, password and role are required");
        err.status=400;
        throw err;
    }

    //check user with email and role
    const user=await UserTypeModel.findOne({email: normalizedEmail, role: normalizedRole});
    if(!user){
        const err=new Error("invalid email or role");
        err.status=401
        throw err;
    }
    //if user exists

    //compare passwords
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        const err=new Error("invalid password");
        err.status=401
        throw err;
    }
    //check isActive state
    if(user.isActive===false){
        const err=new Error("user is blocked, please contact admin");
        err.status=403;
        throw err;
    }

    //generate token
    const token=jwt.sign({userId:user._id,
        role:user.role,email:user.email}
        ,process.env.JWT_SECRET,
        {expiresIn:"1h"});
    //return token;

    const userObj=user.toObject();
    delete userObj.password;
    return {token,user:userObj};
};
