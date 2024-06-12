import "./exploreMenu.css" ;
import { menu_list } from "../../assets/assets";

export  const ExploreMenu = ({category , setCategory}) => {
  return (
    <div  className="explore_menu" id="explore_menu">
    <h1>Explore our menu</h1>
    <p className="explore_menu_text">Explore our mouthwatering menu, crafted with love and bursting with flavor</p> 
      <div className="explore-menu-list">
        {menu_list.map((item , index) => {
          return (
            <div onClick={() => (setCategory(prev => prev === item.menu_name ? "All" : item.menu_name))}  className="explore_menu-listItem" key={index} >
            <img className={category === item.menu_name? "active":""}   src={item.menu_image} alt="menu item" />
            <p>{item.menu_name}</p> 
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

