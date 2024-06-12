import axios from "axios";
import "./list.css";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";

export const List = ({url}) => {
  const [list, setList] = useState([]);
  

  const getData = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      setList(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const removeFood = async (productId) => {
    // if (!list.some((food) => food._id === productId)) {
    //   toast.error("Product not found in the list");
    //   return;
    // }
  
    try {
      const res = await axios.post(`${url}/api/food/remove`, { id: productId });
      console.log(res.data);
  
      toast.success("Deleted successfully");
  
      await getData();
    } catch (error) {
      console.error("Error removing food:", error);
      toast.error("Failed to delete");
    }
  };
  

  return (
    <div className="list">
      <p>All food list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((food, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + food.image} alt="" />
              <p>{food.name}</p>
              <p>{food.category}</p>
              <p className="cursor">${food.price}</p>
              <p className="cursor" onClick={() => removeFood(food._id)}>
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};