import mongoose from "mongoose";
const {Schema , model} = mongoose;

const foodSchema = new Schema({
    name :{type:String , required:true} , 
    description :{type:String , required:true} ,
    price :{type:Number , required:true},
    image :{type:String , required:true} ,
    category :{type:String , required:true}
})

export const foodModel = mongoose.models.food || model("food" , foodSchema) ;

