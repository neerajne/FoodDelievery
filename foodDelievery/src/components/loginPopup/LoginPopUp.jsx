import { assets } from '../../assets/assets';
import { useStore } from '../../context/StoreContext';
import './loginPopup.css' ;
import {  useState } from 'react';
import axios from "axios" ;

export  const LoginPopUp = ({login , setLogin}) => {

const { url , token , setToken } = useStore();

   const [currState , setCurrState] = useState("signup") ;
   const [data , setData] = useState({
      name:"",
      email:"",
      password:""
   })

   const onChangeHandler = (e) => {
      const name = e.target.name ;
      const value = e.target.value ;
      setData((prev) => ({...prev , [name] : value}))
   }

const onLogin =async (e) => {
   e.preventDefault();

   let newUrl = url ;
   if(currState === "login"){
      newUrl += "/api/user/login" 
   }else{
      newUrl += "/api/user/register"
   }

   const response = await axios.post(newUrl , data);
   if(response.data.success){
      setToken(response.data.token) ;
      localStorage.setItem("token" , response.data.token);
      setLogin(false);
   }
   else{
      alert(response.data.message)
   }
}

  return (
    <div className='login-popup'>
       <form onSubmit={onLogin} action="" className='login-PopUp-container'>

        <div className='login-popup-title'>
        <h2>{currState}</h2>
        <img  onClick={() => setLogin(!login)} src = {assets.cross_icon} alt=""  />
         </div>

         <div className='login-popup-inputs'>
            {currState==="signup" &&    <input type="text" placeholder='username' name='name' onChange={onChangeHandler} value={data.name} required /> }
            <input type="email" placeholder='email' name='email' onChange={onChangeHandler} value={data.email} required />
            <input type ="password" placeholder='password'name='password' onChange={onChangeHandler} value={data.password} required />
         </div>

         <button> {currState==="signup" ? "create account": "login" } </button>


         { currState==="signup" &&  
            <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>by continuing , i agreee the terms of use and privacy policy</p> 
         </div>
        }

           {currState==="login" ? <p>Create a new account ? <span onClick = { () => setCurrState("signup") }> Click Here </span></p> : 
             <p>Alread have an account ? <span  onClick={() => setCurrState("login")} >login here</span></p> }


       </form>
    </div>
  )
}


