import profileImage from "../assets/profile.png"
import { motion } from "motion/react"
import { Link } from 'react-router'

import { useState } from 'react'

import { useAuthStore } from "../store/authStore.js"

const Profile = () =>{
  
  const { user } = useAuthStore()
  
  const userId = user._id
  const date = new Date()
  const currentDob  = new Date(user.dob)
  
  const age = date.getFullYear() - currentDob.getFullYear()
  
  const name = user.username
  const email = user.email
  const phoneNo = user.phoneNo
  const address = user.address
  const occupation = user.occupation
  
  
  const status = user.status
  
  
  
  const [isOpen, setIsOpen] = useState(false)
  
  const handleOpen = () =>{
    setIsOpen(true)
  }
  
  
  
  return(
    <motion.div 
      className= " flex relative flex-col w-md sm:w-lg items-center  p-3 h-full overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r mt-4 from-purple-900 to-fuchsia-800 mb-6 bg-clip-text text-center">Profile Information
        
      </h2> 
      <div className="flex flex-col items-center justify-center">
        <img src={profileImage} className="size-20 rounded-full border-2 border-gray-900"
        /> 
        
        
        
        <div className="mt-4 text-purple-950 flex flex-col gap-4">
          <p>Name: {name} </p>
          <p>Email: {email}</p>
          <p>Age: {age} </p>
          <p>Address: {address} </p>
          <p>Occupation: {occupation} </p>
          <p>Marital status: {status}</p>
          <p>Mobile number: {phoneNo}</p>
          
        </div>
        
        <motion.button
          className="py-2 px-5 mt-6 bg-gradient-to-r from-purple-900 to-fuchsia-800 text-gray-200"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          
        >
          <Link to="/edit-user">
            Edit Profile
          </Link>
           
           
        </motion.button>
      </div>
      
    </motion.div>
    
    
    
  )
}

export default Profile