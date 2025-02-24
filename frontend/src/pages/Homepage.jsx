import { motion } from "motion/react"
import image from "../assets/img.png"

const Homepage = () =>{
  
  
  return(
    <div className=" pt-20  absolute z-40 flex items-center px-6 ">
      <div className="flex flex-col sm:flex-row  gap-6 items-center justify-center">
        <div className=" flex flex-col items-center text-gray-900 text-center items-center ml-6 sm:w-2/4 sm:mb-5">
          <p className="text-4xl font-semibold mb-3 sm:text-2xl">
            It's your world. <br/>We'll help you to explore it
          </p>
          <motion.button
            className=" p-2 sm:text-md border-none mt-5 outline-none bg-fuchsia-300 text-gray-800 hover:bg-gray-200 hover:text-fuchsia-800"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          > 
            Let's Explore
          </motion.button>
          
        </div>
        <div>
          <img src={image} className="md:ml-5 md:size-120 size-80"/>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Homepage