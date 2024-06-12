import { useStore } from "../../context";
import "./myorders.css";
import { assets } from "../../assets/assets"
import React, { useEffect, useState } from 'react'
import axios from "axios" ;
export const MyOrders = () => {

    
    const[data , setData ] = useState([]);
    const{token , url} = useStore();

    const fetchOrders = async() => {
        const response = await axios.post(url+"/api/order/userOrder" ,{}, {headers:{token}});
        console.log(response.data.data);
        setData(response.data.data);

    }
    useEffect(() => {
        if(token){
            fetchOrders() ;
        }

    },[token])
 

  
  return (
    <div className="myorders">
    <h2>MY ORDERS</h2>
    <div className="container">
    {data.map((order , index) => {
        return(
            <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item, index) => {
                    if(index === order.items.length-1){
                        return item.name + "X" + item.quantity
                    }
                    else{
                        return item.name + "X "+item.quantity + ","
                    }
                })}</p>
                <p>${order.amount}.00</p>
                <p>Items:{order.items.length}</p>
                <p><span>&#x25cf;</span><b>{order.status}</b></p>
                <button onClick={fetchOrders}>Track order </button>
            </div>
        )
    })}
    </div>
      
    </div>
  )
}


