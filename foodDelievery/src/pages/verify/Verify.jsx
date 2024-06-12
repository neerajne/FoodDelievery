import"./verify.css";
import { useSearchParams  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useStore} from "../../context";
import axios from "axios";
import { useEffect } from "react";

export const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    console.log(success);
    console.log(orderId);

    const navigate = useNavigate();
    const{url} = useStore();

    const verifyPayment  = async(req,res) => {
        const response  = await axios.post(url+"/api/order/verify",{success, orderId});
        if(response.data.success){
            navigate("/myorders")
        }
        else{
            navigate("/");
        }
    }
useEffect(() => {
    verifyPayment();
},[])
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  )
}

