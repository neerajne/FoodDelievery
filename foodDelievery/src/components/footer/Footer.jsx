import { assets } from "../../assets/assets";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam neque est a delectus asperiores autdita. Dolore, evenit cupiditate!</p>
          <div className="footer-social-icons">
            <img src = {assets.facebook_icon}  alt="" />
            <img src = {assets.twitter_icon}   alt="" />
            <img src = {assets.linkedin_icon}  alt="" />
          </div>
        </div>


        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delievery</li>
            <li>Privacy & Policy</li>
        </ul>
        </div>


        <div className="footer-content-right">
        <h2>GET IN TOUCH </h2>
        <ul>
            <li> +91-72529 - 36753</li>
            <li>contact us : nnegi637673@gmail.com </li>
        </ul>
        </div>
 
 
      </div>
      <hr />
      <p className="footer-copyright">Copyright &copy; 2024 Tomato.com -All Right Reserved </p>
    </div>
  );
};
