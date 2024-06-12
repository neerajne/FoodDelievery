import { Routes, Route } from "react-router-dom";
import {Add} from "../pages/add"
import { List } from "../pages/list";
import {Orders} from "../pages/orders" ;


export  const AllRoutes = () => {
  const url = "http://localhost:8080";
  return (
    <div>
       <Routes>
          <Route path="/add" element = {<Add  url = {url} />}/>
          <Route path="/list" element = {<List url = {url}  />}/>
          <Route path="/orders" element = {<Orders url = {url}  />}/>
       </Routes>
    </div>
  )
}


