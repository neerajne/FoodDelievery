import {Routes , Route} from "react-router-dom" ;
import {Home} from "../pages/home" ;
import {Cart} from "../pages/cart" ;
import {PlaceOrder} from "../pages/placeOrder";
import {Verify} from"../pages/verify" ;
import { MyOrders } from "../pages/myOrders";
export const AllRoutes = () => {

  return (
    <>
    
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/cart" element = {<Cart/>}  />
        <Route path="/order" element = {<PlaceOrder/>}  />
        <Route  path="/verify" element ={<Verify/>} />
        <Route path="/myorders" element = {<MyOrders/>}/>
      </Routes>
    </>
  )
}


