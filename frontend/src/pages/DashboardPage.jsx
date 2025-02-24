import logo from '../assets/logoo.png'
import { motion } from "motion/react"
import { LayoutDashboard, CircleChevronLeft, Target, BookImage, PlaneTakeoff, SlidersHorizontal, LogOut, CircleUserRound } from 'lucide-react'
import { Outlet, Link, useLocation } from "react-router"
import { useState } from "react"
import { useAuthStore } from "../store/authStore.js"
import { useNavigate } from 'react-router'


const DashboardPage = () =>{
  
  const { logout } = useAuthStore()
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  
  const handleVisibility = () =>{
    
      setIsVisible(!isVisible)
      
  }
  
  const handleLogout = async() =>{
    
    
    await logout()
    navigate("/")
    
  }
  
  
  return(
    
    <div className="h-full bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl relative mt-20 w-full overflow-y-scroll flex justify-center overflow-x-hidden">
      <div 
        className="fixed top-15 left-0 bg-fuchsia-100 h-full z-80 backdrop-filter flex flex-col backdrop-blur-xl gap-2 p-2"
      >
        <button 
          className=" border-none z-60 outline-none bg-transparent md:hidden  absolute -right-3 top-7 flex text-center"

          onClick={handleVisibility}
        >
          <CircleChevronLeft className="text-purple-800 size-5"
          />
          
        </button>
        <div className="mt-4">
          <Link to="/" className="flex gap-3 items-center justify-center pointer-cursor">
            <img src={logo} className="size-6" />
            <span className={`text-xl md:flex  font-bold text-purple-800 ${isVisible ? "flex" : "hidden"} `}>Moores.</span>
          </Link>
        </div>
        <div className="flex flex-col">
          
          <Link to="/account/" className="flex gap-3 items-center pointer-cursor mt-4 ">
            <LayoutDashboard className="size-6 text-purple-800" />
            <span className={`text-md md:flex text-purple-800 ${isVisible ? "flex" : "hidden"} `}>
              Dashboard
            </span>
          </Link>
          
          <Link to="/account/profile" className="flex gap-3 pointer-cursor items-center  mt-4">
            <CircleUserRound className="size-6 text-purple-800 " />
            <span className={`text-md md:flex text-purple-800 ${isVisible ? "flex" : "hidden"} `}>Profile
            </span>
          </Link>
          
          <Link to="/account/destination" className="flex gap-3 items-center mt-4">
            <PlaneTakeoff className="size-6 text-purple-800" />
            <span className={`text-md md:flex text-purple-800 ${isVisible ? "flex" : "hidden"} `}>Destination</span>
          </Link>
          
           <Link to="/account/activities" className="flex gap-3 items-center mt-4">
            <Target className="size-6 text-purple-800" />
            <span className={`text-md md:flex text-purple-800 ${isVisible ? "flex" : "hidden"} `}>Activities</span>
          </Link>
          
           <Link to="/account/settings" className="flex gap-3 items-center mt-4">
            <SlidersHorizontal className="size-6 text-purple-800" />
            <span className={`text-md md:flex text-purple-800 ${isVisible ? "flex" : "hidden"} `}>Settings</span>
          </Link>
          
          <motion.button 
            className="flex gap-3 items-center hover:text-gray-300 mt-4" 
            onClick={handleLogout}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <LogOut className="size-6 text-purple-800"/>
            <span className={`text-md md:flex text-purple-800 ${isVisible ? "flex" : "hidden"} `}>Logout</span>
            
          </motion.button>
        
        </div>
        

      </div>
      
      
      <div className=" mt-6 ml-10 -z-10">
        <Outlet />
      </div>
      
      
    </div>
  )
}
export default DashboardPage