import "./add.css" ;
import {assets} from "../../../assets/admin_assets/assets"
import {  useState } from "react";
import axios from "axios" ;
import { toast , Bounce } from "react-toastify";

export const Add = ({url}) => {

  

  const[data , setData]= useState({
    name:"" , 
    description:"", 
    category:"salad", 
    price:""
  });

       const onChangeHandler = (e) => {
        const name = e.target.name ; //This line retrieves the name attribute of the input field that triggered the event.
        const value = e.target.value ; // This line retrieves the current value of the input field that triggered the event.
        setData((prev) => ({...prev , [name] : value}))
       }   //(prev) => ({...prev, [name]: value}) is a function that takes the previous state (prev) and creates a new object by spreading the previous state (...prev) and then adding or updating a property with the key [name] and value value.
           // The reason for using square brackets [name] is that it allows us to dynamically create a property name based on the value of the name variable. This is called computed property names in JavaScript.
   
           const[image , setImage] = useState(false);

    const onSubmitHandler  = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name" , data.name);
      formData.append("description" , data.description);
      formData.append("price" , Number(data.price));
      formData.append("category" , data.category);
      if (image) {
            formData.append("image", image);
          }
     
      const response = await axios.post(`${url}/api/food/add` , formData) ;
      if(response.data.success){
        setData({
          name:"" , 
          description:"", 
          category:"salad", 
          price:""
        })
        setImage(false) ;
        toast.success('successfully send the data ', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }
         else  
           {
        console.log("Erro occured")
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }
    }

    return (

      <div className="add">
      <form className="flex-col" onSubmit={ onSubmitHandler}>
        <div className="add-image-upload flex-col ">
          <p>Upload Image</p>
          <label htmlFor = "image">
            <img src = {image?URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input
          onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden  required /> 
        </div>
        
        <div className="add-product-name flex-col"> 
            <p>Product name</p>
            <input onChange={(e) =>onChangeHandler(e)} value={data.name} type="text"  name="name" placeholder="type here" />
            </div>

            <div className="add-product-description flex-col">
              <p>Product description</p>
              <textarea onChange={(e) =>onChangeHandler(e)} value={data.description} name="description" rows={6} placeholder="write content here" required></textarea>
            </div>

            <div className="add-category-price">
               <div className="add-category flex-col">
                <p> category </p>
                <select onChange={(e) =>onChangeHandler(e)} value={data.category} name="category" >
                  <option value="Select">Select</option>
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Desert">Desert</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure-veg">Pure-veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles ">Noodles</option>
                </select>
               </div>

               <div className="add-price flex-col">
               <p>Product price</p>
               <input  onChange={(e) =>onChangeHandler(e)} value={data.price} type="number" name="price" placeholder="$20 " />
               </div>

            </div>
            <button type="submit" className="add-button">Add</button>
      </form>
        
      </div>
    )
  }