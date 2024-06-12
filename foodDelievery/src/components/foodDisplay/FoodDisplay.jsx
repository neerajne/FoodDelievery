import React from 'react';
import { useStore } from '../../context';
import { FoodItems } from '../foodItems';
import './foodDisplay.css';

export const FoodDisplay = ({ category }) => {
  const { food_list } = useStore();
  return (
    <div className="food-Display" id="food-Display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((food, index) => (
          (category === 'All' || category === food.category) ? (
            <FoodItems key={index} food={food} />
          ) : null
        ))}
      </div>
    </div>
  );
};
