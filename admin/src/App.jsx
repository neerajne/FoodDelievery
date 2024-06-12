import { AllRoutes } from "./components/routes"
import { Navbar } from "./components/navbar/Navbar"
import { SideBar } from "./components/sidebar/SideBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  
  return (
    <div>
    <ToastContainer/>
    <Navbar/>
    <hr />
    <div className="app-content">
      <SideBar/>
      <AllRoutes/>
    </div>
    </div>
  )
}


