import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt" ;
import jwt from "jsonwebtoken"
import validator  from "validator";


const loginUser = async(req,res) => {
    const {  password, email } = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:"false" , message:"user doesn't exsists "});
        }
        const isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch){
            return res.json({success:false , message:"invalid credentials"});
        }
        if(isMatch){
            const token = createToken(user._id);
            res.json({success:"true" , token});
        }
    } catch (error) {
        console.log(error);
        return res.json({success:"false" , message:"error"});
    }
} 

const createToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET)
}


const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "user already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: "false", message: "wrong email" });
        }
        if (password.length < 8) {
            return res.json({ success: "false", message: "password length must be more than 8 characters" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        
        const token = createToken(newUser._id);
        return res.json({ success: "true", token });
    } catch (error) {
        console.log(error);
        return res.json({ success: "false", message: "error" });
    }
};
export {loginUser , registerUser} ;