
import toast from 'react-hot-toast';
import { motion } from "motion/react"
import { useState } from 'react'
import { Lock, Loader, MoveLeft } from "lucide-react"
import Input from "../components/Input"
import { Link } from 'react-router'
import { useNavigate, useParams } from 'react-router'
import { useAuthStore } from "../store/authStore.js"


const ResetPasswordPage = () =>{
  
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const { token } = useParams()
  const navigate = useNavigate()
  const { resetPassword, isLoading, error, message } = useAuthStore()
  const handleToggle =  () =>{
    setIsVisible(!isVisible)
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    if(password !== confirmPassword){
      setConfirmError("Password does not match")
      return 
    }
    try{
      await resetPassword(token, password)
      toast.success("Password reset successfully, redirecting to login page... ")
      setTimeout(() =>{
        navigate("/login")
      }, 2000)
    } catch (error) {
      toast.error(error.message || "Error resetting password")
      
    }
  }
  
  return (
    
    <motion.div 
      className="w-xs sm:max-w-md sm:w-sm w-5/6 bg-gray-800 backdrop-filter backdrop-blur-xl rounded-xl shadow-xl overflow-hidden" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-3">
        <h2 className="text-xl text-transparent bg-gradient-to-r font-bold from-purple-500 to-fuchsia-300 mb-3 mt-3 bg-clip-text text-center"> Reset Password
        </h2>
        
        <form onSubmit={handleSubmit}>
            
          <Input
            icon={Lock}
            type={!isVisible ? "password" : "text"}
            placeholder={"Enter new password"}
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
            
          />
          
          {confirmError  && <p className="text-red-500 text-xs font-semibold my-2" >{confirmError}</p>
            
          }
          
          <Input
            icon={Lock}
            type={"password"}
            placeholder={"Confirm new password"}
            value={confirmPassword}
            onChange={(e) => (setConfirmPassword(e.target.value))}
          />
                      
            { error && <p className="text-red-500 font-semibold mt-2" >{error}</p>
            }
          
          <motion.button
            className="w-full py-2 px-5 my-3 bg-gradient-to-r from-purple-600 to-fuchsia-700 text-gray-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type= "submit"
            disabled={isLoading}
        
          > 
            { isLoading ? <Loader className=" animate-spin mx-auto" size={24} /> : "Reset Password"}
      
          </motion.button>
        </form>
      </div>
      <div className="bg-gray-700 mt-2 px-5 py-2 text-gray-200 text-xs text-center">
        <Link to="/login" className="text-gray-200 text-xs flex gap-2 justify-center items-center hover:text-purple-500 hover:underline text-center">
          <MoveLeft className="text-center size-4" /> 
          <span>Back to Login</span>
        </Link>
      </div>
      
    </motion.div>
    
  
  
  
  )
}

export default ResetPasswordPage