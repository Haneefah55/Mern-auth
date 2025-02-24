import { VERIFICATION_EMAIL_TEMP, WELCOME_EMAIL_TEMP, PASSWORD_RESET_REQUEST_TEMP, RESET_SUCCESS_TEMP } from "./emailTemplate.js"
import { mailtrapClient, sender } from "./mailtrapConfig.js"

export const sendVerificationEmail= async (email, verificationToken) =>{
  const recipient = [{ email }]
  try{
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMP.replace("{verificationCode}", verificationToken),
      category: "Email Verification",
    })
    
    
    
  } catch (error){
    console.log("Error sending verification email", error)
    
  }
}

export const sendWelcomeEmail = async (email, username) =>{
  
  const recipient = [{ email }]
  //to get current year
  const date = new Date()
  const currentYear = date.getFullYear()
  try{
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Welcome to Moores!",
      html: WELCOME_EMAIL_TEMP.replaceAll("{name}", username).replaceAll("{year}", currentYear),
      category: "Welcome message",
    })
    
  
    
  } catch (error){
    console.log("Error sending welcome email", error)
    
  }
  
}

export const sendPasswordResetEmail = async (email, resetUrl) =>{
  const recipient = [{ email }]
  try{
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset",
      html: PASSWORD_RESET_REQUEST_TEMP.replace("{resetUrl}", resetUrl),
      category: "Password reset request",
    })
    
  
    
  } catch (error){
    console.log("Error sending  email", error)
    
  }
}

export const sendResetSuccessEmail = async (email) =>{
  const recipient = [{ email }]
  try{
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset successful",
      html: RESET_SUCCESS_TEMP,
      category: "Password reset success",
    })
    
    
    
  } catch (error){
    console.log("Error sending  email", error)
    
  }
}