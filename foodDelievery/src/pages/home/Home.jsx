import './Home.css'
import {Header} from "../../components/header" ;
import { ExploreMenu } from '../../components/menu/ExploreMenu';
import { useState } from 'react';
import { FoodDisplay } from '../../components/foodDisplay/FoodDisplay';



export const Home = () => {
  const [category , setCategory] = useState('All');
   return (
    <div>
    <Header/>
    <ExploreMenu category = {category} setCategory= {setCategory}  />
    <FoodDisplay category = {category}/>
   
    </div>
  )
}


