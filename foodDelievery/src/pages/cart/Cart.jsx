import "./cart.css"
import { useStore } from "../../context"
import { useNavigate } from "react-router-dom"
export const Cart = () => {
        const {cartItems , food_list ,token ,  removeFromCart , getTotalAmount} =  useStore()

const navigate = useNavigate();
const {url} = useStore() ;

  return (

    
    <div className="cart">
      <div className="cart-items">
         <div className="cart-items-title">
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
         
         </div>
         <br />
         <hr />
         {food_list.map((food , index) => {
          if(cartItems[food._id]>0){
            return(
              
            <div key={food._id}>
              <div   className="cart-items-title cart-items-item">

                 <img src={url+"/images/"+food.image} alt="" />
                 <p> {food.name} </p>
                 <p>${food.price}</p>
                 <p>{cartItems[food._id]}</p>
                 <p>{food.price*cartItems[food._id]}</p>
                 <p className="cross" onClick={() => removeFromCart(food._id)}>x</p>
              </div>
              <hr />
              </div>
            )
          }
         })}

         <div className="cart-bottom">
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

            
            <button onClick={() => navigate('/order')}   >PROCEED TO CHECKOUT</button>

           </div>

           <div className="cart-promocode">
            <p>Promo code , enter here</p>
            <div className="cart-promocode-input">
            <input type="text" placeholder="PROMOFIELD" />
            <button >submit</button>

            </div>
           </div>
         </div>


    </div>
    </div>
  )
}