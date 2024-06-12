import { foodModel } from "../models/FoodModel.js";
import fs from 'fs'

// add food item
export const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.file.filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: 'Food item added' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
};
     
     

//all food list
export const listFood = async (req ,  res) =>{
  try {
    const foods = await foodModel.find({});
    res.json({
      success:true , data :foods})
  } catch (error) {
    res.json({success:false  , message:"error"})
  }
}

export const removeFood = async(req , res) => {
  try {
   const food  =  await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}` , () => {})
    await foodModel.findByIdAndDelete(req.body.id);

    res.send("delted successfully");
  } catch (error) {
    res.send("error in the deletion")
  }
}