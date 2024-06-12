import  {userModel}  from "../models/userModel.js";

//ADD TO CART 

export const addToCart = async(req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = userData.cartData ;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] =1 ;
        }else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId ,{cartData});
        return res.json({success :"true" , message:"added to cart"})
    } catch (error) { 
       console.log(error);
       res.json({success:"false"})        
    }
}


// REMOVE FROM CART

export const removeFromCart = async (req,res) => {
try {
    let userData = await userModel.findById(req.body.userId); 
    let cartData= await userData.cartData;
       if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId] -= 1 ;
       }

       await userModel.findByIdAndUpdate(req.body.userId , {cartData}); 
       return res.json({success:"true" , message:"remove from cart"});
} catch (error) {
    console.log(error);
    return res.json({success:"false" , message:"not removed from cart"});
    
}

}

export const getCart = async(req,res) => {

    try {
        
        let userData = await userModel.findById(req.body.userId); 
        let cartData= await userData.cartData;
        return res.json({success:"true" , cartData});
    } catch (error) {
        console.log(error);
        return res.json({success:"false" , message:"cart data not get"});
    }
    

}