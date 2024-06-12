import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';


const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});
  const[food_list , setfood_List] = useState([]);

  const url = "http://localhost:8080";
  const[token , setToken] = useState("");

  const addToCart = async(itemId) => {

    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add" , {itemId} , {headers : {token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(url+"/api/cart/remove" , {itemId} , {headers:{token}})
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };




  const fetchFoodList = async () => {
    const res = await axios.get(url + "/api/food/list");
    console.log(res.data.data);
    setfood_List(res.data.data);
  };
  const loadCartData = async (token) => {
    const res = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(res.data.cartData)
     
  }

  useEffect(() => {
    async function loadData() {
      fetchFoodList(); // Await is not needed here since loadData is not async
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);


  const value = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token ,
    setToken
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
