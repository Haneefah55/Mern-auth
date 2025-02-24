import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

import { User } from "../model/userModel.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendResetSuccessEmail } from "../mailtrap/email.js"



export const loginUser = asyncHandler(async (req, res) =>{
  


  try{
    const { email, password } = req.body
    if(!email && !password){
      return res.status(400).json({success: false, message: "Invalid email or password"})
    }
    const user = await User.findOne({ email })
    if(!user){
      return res.status(400).json({success: false, message: "Invalid email or password"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
      return res.status(400).json({success: false, message: "Invalid email or password"})
    }
    
    
    generateTokenAndSetCookie(res, user._id)
    
    user.lastLogin = new Date()
    
    await user.save()
    
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    })
  } catch (error) {
    console.log("Error logging in user", error)
    res.status(400).json({success: false, message: error.message})
    
  }
  
})

export const registerUser = asyncHandler(async (req, res) =>{
  const {username, email, password} = req.body
  try {
    if(!username || !email || !password){
    throw new Error("All fields are required")
    }
    const userExist = await User.findOne({email})
    if(userExist){
      res.status(400).json({success: false, message: "User already exist"})
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()
    
    const user = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000  //24 hrs
    })
    
    await user.save()
    //jwt
    generateTokenAndSetCookie(res, user._id)
    
    //email verification
    await sendVerificationEmail(user.email, verificationToken)
    
    res.status(200).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    })
    
    
    
  } catch (error) {
    res.status(400).json({success: false, message: error.message})
  }
  
})

export const logoutUser = async (req, res) =>{
  console.log("logout button clicked")
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
  
  
  })
  console.log("button working")
  res.status(200).json({success: true, message: "User logout successfully"})
  console.log("user logout successfully")
}

export const verifyEmail = asyncHandler(async (req, res) => {
  const { code } = req.body
  try{
    const user = await User.findOne({
      isVerified: false,
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    })
    
    if(!user){
      res.status(400).json({success: false, message: "Invalid or expired verification code"})
      
    }
    user.isVerified = true
    
    user.verificationTokenExpiresAt = undefined
    
    await user.save()
    
    await sendWelcomeEmail(user.email, user.username)
    
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    })
      
  } catch (error) {
    res.status(400).json({success: false, message: error.message})
    
  }
})

export const forgetPassword = asyncHandler(async (req, res) =>{
  const { email } = req.body
  
  try{
    const user = await User.findOne({ email })
    if(!user){
      return res.status(400).json({success: false, message: "User not found"})
    }
    
    const resetToken = crypto.randomBytes(20).toString("hex")
    const resetTokenExpiredAt = Date.now() + 2 * 60 * 60 * 1000
    
    user.resetPasswordToken = resetToken
    user.resetPasswordExpiresAt = resetTokenExpiredAt
    
    await user.save()
    
    await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`)
    
    res.status(200).json({
      success: true,
      message: "Reset password link sent successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    })
    
    
  } catch (error) {
    console.log("server error", error)
    res.status(400).json({success: false, message: error.message})
    
  }
})

export const resetPassword = asyncHandler(async(req, res) =>{
  
  try{
    const {token} = req.params
    const {password} = req.body
  
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
      
    })
    if(!user){
      return res.status(400).json({success: false, message: "Invalid or expired reset link"})
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    
    user.password = hashedPassword
    user.resetPasswordToken = undefined
    user.resetTokenExpiredAt = undefined
    await user.save()
    
    await sendResetSuccessEmail(user.email)
    res.status(200).json({success: true, message: "Password reset successfully"})
  } catch (error) {
    console.log("Error in reset password", error)
    res.status(400).json({success: false, message: error.message})
  }
})

export const checkAuth = asyncHandler(async (req, res) =>{
  try{
    const user = await User.findById(req.userId).select("-password")
    if(!user) return res.status(400).json({success: false, message: "User not found"})
    res.status(200).json({
      success: true,
      message: "User Authenticated",
      user: {
        ...user._doc,
        password: undefined,
      }
    })
  } catch (error) {
    console.log("Error in checking authenticity")
    res.status(400).json({success: false, message: error.message})
  }
})



export const updateUser = asyncHandler(async (req, res) =>{
  const { id } = req.params
  const { data } = req.body
  const newData = { ...data }
  try{
    const updatedUser = await User.findByIdAndUpdate( id, newData, { new: true })
    await updatedUser.save()
     res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    })
    
    console.log("user updated successfully", user)
      
  } catch (error) {
    res.status(400).json({success: false, message: error.message})
    console.log(error)
  }
  
})



    