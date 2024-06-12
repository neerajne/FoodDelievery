import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import  './navbar.css';
import Logo from "../../assets/profile.jpg" ;
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../context';
export const Navbar = ({login , setLogin}) => {


  const navigate = useNavigate();
  function handleClick (){
     navigate('/cart');
   }

   const {getTotalAmount , token , setToken} =  useStore() ;


   const logout = () =>{
    localStorage.removeItem("token");
    setToken("")
    navigate('/');
   }



  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} className='logo' alt="" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' >home</Link>
        <a href='#explore_menu'>menu</a>
        <a href='#app-download'>mobile app</a>
        <a href='#footer'>contact us</a>
        </ul>
      
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
            <img onClick={handleClick}  src={assets.basket_icon} alt="basket icon" />
              <div className= { getTotalAmount() > 0 ?  "dot" : " " }></div> 
            
        </div>
        {!token && <button onClick={() => setLogin(!login)} className="btn btn-info">Sign in</button> }
        {token && 
        <div className='navbar-profile'>
        <img className='logo-profile' src = {Logo} alt="" />
        <ul className='nav-profile-dropdown'>
          <li onClick={() => navigate('/myorders')}> <img src = {assets.bag_icon} alt="" /> <p>Orders</p> </li>
          <hr/>
          <li onClick={logout}> <img src = {assets.logout_icon} alt="" /> <p>Logout</p> </li>
        </ul>
        </div> }
        
      </div>
    </div>
  )
}

