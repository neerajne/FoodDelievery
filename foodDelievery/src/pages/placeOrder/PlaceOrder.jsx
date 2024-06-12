import "./placeOrder.css";
import{ useStore } from "../../context" ;
import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export const PlaceOrder = () => {

const{getTotalAmount, token , food_list , url , cartItems ,} = useStore(); 
const navigate = useNavigate();
const[data , setData] = useState({
  firstname:"",
  lastname:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zipcode:"",
  country:"",
  phone:""
})



useEffect(() => {
  if(!token){
      navigate('/cart')
  }
  else if(getTotalAmount() === 0){
      navigate('/cart')
  }
},[token])
// useEffect(()=>{
//   console.log(data)
// },[data])

const placeorder = async(e) =>{
e.preventDefault();
let orderItems  = [];
food_list.map((item) =>{
  if(cartItems[item._id]>0){
    let itemInfo = item;
    itemInfo["quantity"] = cartItems[item._id];
    orderItems.push(itemInfo);
  } 
})
let orderData = {
  address :data,
  items:orderItems,
  amount:getTotalAmount()+2
}
    let res = await axios.post(url+ "/api/order/place",orderData,{headers:{token}})
     if(res.data.success) {
      console.log("success");
      const{session_url} = res.data ;
      console.log(res.data);
      window.location.replace(session_url);
     }else{
      alert("error");
     }
 }


const onChangeHandler = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setData((data) =>({...data ,[name]:value}) )
}



  return (

    <form onSubmit={placeorder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delievery Information</p>
        <div className="multi-fields">
          <input type="text" required name="firstname" onChange={onChangeHandler} value={data.firstname} placeholder="first-name" />
          <input type="text" required name="lastname" onChange={onChangeHandler} value={data.lastname}  placeholder="last-name" />
        </div>

        <input type="email" required name="email" onChange={onChangeHandler} value={data.email} placeholder="email address" />
        <input type="text"  required name="street" onChange={onChangeHandler} value={data.street}  placeholder="street" />

        <div className="multi-fields">
          <input type="text" required name="city" onChange={onChangeHandler} value={data.city}  placeholder="City" />
          <input type="text" required name = "state" onChange={onChangeHandler} value={data.state}  placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" required name = "zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder="Zip-Code" />
          <input type="text" required name="country"  onChange={onChangeHandler} value={data.country}  placeholder="Country" />
        </div>
        <input type="text" required name="phone"  onChange={onChangeHandler} value={data.phone} placeholder="phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalAmount()}</p>
            </div>

            <hr />
            <div className="cart-toal-details">
              <p>Delievery Fee</p>
              <p>${getTotalAmount() > 0 ? 20 : 0}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b className="total">${getTotalAmount() > 0 ? getTotalAmount()+20 : 0}</b>
            </div>
          </div>

          <button type="submit"  >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};
// if (response.data.success) {
    //   const { session_url } = response.data;
    //   window.location.replace(session_url);
    // } else {
    //   alert("error");
    // }