import { useState } from "react";
import { assets } from "../../assets/assets";
import "./foodItems.css";
import {useStore} from "../../context" 

export const FoodItems = ({ food }) => {
  const {addToCart , removeFromCart , cartItems} = useStore() ;
  const { _id, name, image, price, description, category } = food;
  const{url} = useStore() ;
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={url+"/images/"+image} className="food-item-img" alt={name} />
        {!cartItems[_id] ? (
          <img
            className="add"
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="count">{cartItems[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
