import { motion } from "motion/react"
import { Link } from 'react-router'
import { useAuthStore } from "../store/authStore.js"
//import { formatDate } from "../utils/date.js"



const Dashboard = () =>{
  const { user } = useAuthStore()
  const name = user.username
  const email = user.email.slice(0, 16).padEnd(19, ".")
  
  const created = user.createdAt
  const createdDate = new Date(created).toLocaleDateString("en-US", {
    year: "numeric", 
    month: "long",
    day: "numeric",
    
  })
  
  
  const last = user.lastLogin
  const lastLoginDate = new Date(last).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    
  })
  
  
  
  return(
    <motion.div 
      className= " mt-8 ml-3 md:ml-10 h-full  p-4 bg-gray-800 bg-opacity-90 backdrop-blur-xl rounded-2xl shadow-xl backdrop-filter justify-center overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
  
      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center">Dashboard
      
      </h2> 
                
      <p 
          className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center"
      >
        {name ? `${name}` : "Guest" }
      </p>
                
                
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center w-full mb-8 justify-center gap-5">
        <div className=" bg-transparent backdrop-filter pt-2 px-2 border border-fuchsia-200 backdrop-blur-xl rounded-md shadow-xl overflow-hidden">
          <h3 className="text-md text-transparent bg-gradient-to-r font-semibold from-purple-800 to-fuchsia-600 mb-4 bg-clip-text text-center">Profile information</h3>
          <div className="text-gray-200 mb-3 text-sm">
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              
          </div>
            
        </div>
          
        <div className=" bg-transparent backdrop-filter pt-2 px-2 border border-fuchsia-200 backdrop-blur-xl rounded-md shadow-xl overflow-hidden">
          <h3 className="text-md text-transparent bg-gradient-to-r font-semibold from-purple-800 to-fuchsia-600 mb-4 bg-clip-text text-center">Destination
          </h3>
          <div className="text-gray-200 mb-3 text-sm">
            <p className="">No recent destination</p>
            <Link to="/" className="hover:bg-fuchsia-300 text-xs text-purple-800 border border-fuchsia-300" >Explore popular destination
            </Link>
              
              
          </div>
            
        </div>
          
        <div className="bg-transparent backdrop-filter pt-2 px-2 border border-fuchsia-200 backdrop-blur-xl rounded-md shadow-xl overflow-hidden">
          <h3 className="text-md text-transparent bg-gradient-to-r font-semibold from-purple-800 to-fuchsia-600 mb-4 bg-clip-text text-center">Activities
          </h3>
          <div className="text-gray-200 mb-3 text-sm">
            <p className="">
                  
              <span >Joined: {createdDate}</span>
                  
            </p>
               
            <p className="">
                    
              <span >Last Login: {lastLoginDate} </span>
                   
            </p> 
          </div>
        </div>
      </div>
        
      <div className=" w-full h-2/4 flex items-center justify-center bg-purple-300  rounded-2xl shadow-xl overflow-hidden ">
          <p>Your recent activities</p>
          
      </div>

    </motion.div>
    
  )
    
  
}

export default Dashboard