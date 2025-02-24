

export const VERIFICATION_EMAIL_TEMP = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="view-port" content="width=device-width, initial-scale = 1.0"> 
   <title>Verify Your Email</title> 
  </head>
  <body style = "font-family: Poppins, sans-serif; margin: 0, auto; max-width: 600px; padding: 20px; color: #333;">
    <div style="text-align: center; padding: 20px;">
      <h1 style="color: #fff; margin: auto;">Verify your email</h1>
    </div>
    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 5px 5px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <p>Hello,</p>
      <p>Thank you for signing up, your verification code is:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="font-size: 30px; font-weight: bold; letter-spacing: 5px; color: green;">{verificationCode}</span>
      </div>
      <p>Enter this code on the verification page to complete your registration</p>
      <p>This code will expire after 15 minites for security reasons</p>
      <p>If you didnt create an account with us, please ignore this message</p>
      <p>Best regards, <br>Moores</p>
      
      <div style="color: #888; margin-top: 20px; text-align: center; font-size: 10px;">
        <p>This is an automated message, please do not reply to this email</p>
      </div>
      
    </div>
  </body>
</html>

`

export const WELCOME_EMAIL_TEMP = `


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="view-port" content="width=device-width, initial-scale = 1.0"> 
   <title>Welcome to Moores!</title> 
  </head>
  <body style = "font-family: Poppins, sans-serif; margin: 0, auto; max-width: 600px; padding: 20px; color: #333;">
    <div style="text-align: center; padding: 20px;">
      <h1 style="color: #fff; margin: auto; font-size: 25px;">Moores</h1>
    </div>
    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 5px 5px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <h3>Welcome, {name}</h3>
      <p>Thanks for choosing Moores, <br> We are happy to see you on board!</p>
      
      <p>Unleash your creativity with the world’s most powerful all-in-one creative design platform. The only limit is your imagination.</p>
      <div style="padding: 20px 40px; text-align: center; display: flex;">
        <button style="background-color: blue; padding: .5rem 1rem; color: #fff;">Get Started</button>
        
      </div>
      <h4>Helpful resources for getting started</h4>
      <div style="display: flex; flex-direction: column; margin: 2rem 4rem; justify-content: center; align-items: center; background-color: #888; color: #fff; gap: 2rem;">
        <div style="padding: 20px;">
          <h4 style="margin-bottom: .5rem;">Learning Center</h4>
          <p style="margin-bottom: .5rem;">Learn how to setup and use Moores app</p>
          <p style="margin-bottom: .5rem;"><a href="#">Start learning</a></p>
        </div>
        
        <div style="padding: 20px;">
          <h4 style="margin-bottom: .5rem;">Moores Academy</h4>
          <p style="margin-bottom: .5rem;">Levelup with self-paced courses</p>
          <p style="margin-bottom: .5rem;"><a href="#">Explore courses</a></p>
        </div>
        
        <div style="padding: 20px;">
          <h4 style="margin-bottom: .5rem;">Moores Community</h4>
          <p style="margin-bottom: .5rem;">Ask, learn and share from the community</p>
          <p style="margin-bottom: .5rem;"><a href="#">Join community</a></p>
        </div>
        
      </div>
    
      
      <div style="color: #888; margin-top: 2rem; text-align: center; font-size: 15px;">
        <p><a href="#">Unsubscribe</a></p>
        <p>© {year} Moores, Inc All right reserved.</p>
      </div>
      
    </div>
  </body>
</html>


`

export const PASSWORD_RESET_REQUEST_TEMP = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="view-port" content="width=device-width, initial-scale = 1.0"> 
   <title>Password reset </title> 
  </head>
  <body style = "font-family: Poppins, sans-serif; margin: 0, auto; max-width: 600px; padding: 20px; color: #333;">
    <div style="text-align: center; padding: 20px; margin: auto; background-color: #000080; width: 90%; " >
      <h1 style="color: #fff; margin: auto;">Password reset</h1>
    </div>
    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 5px 5px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <p>Hello,</p>
      <p>We recieved a request to rest your password, <br>if you didn't make the request, kindly ignore this email</p>
      <p>To reset your password, click the button below</p>
    
      <a href="{resetUrl}" style="font-size: 12px; background-color: #000080; padding: 16px; border-radius: 4px; color: #fff;">Reset Password</a>
    
      <p>This code will expire after 1hour for security reasons</p>
      
      <p>Best regards, <br>Moores</p>
      
      <div style="color: #888; margin-top: 20px; text-align: center; font-size: 15px;">
        <p>This is an automated message, please do not reply to this email</p>
      </div>
      
    </div>
  </body>
</html>

`


export const RESET_SUCCESS_TEMP = `

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="view-port" content="width=device-width, initial-scale = 1.0"> 
   <title>Password reset successful</title> 
  </head>
  <body style = "font-family: Poppins, sans-serif; margin: 0, auto; max-width: 600px; padding: 20px; color: #333;">
    <div style="text-align: center; padding: 20px; margin: auto; background-color: #000080; width: 90%; " >
      <h1 style="color: #fff; margin: auto;">Password reset successful!</h1>
    </div>
    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 5px 5px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <p>Hello,</p>
      <p>We are writing to confirm that your password has been successfully reset</p>
      
      <div style="text-align: center; margin: auto; padding: 20px; background-color: #000080;"><span style="color: #fff; font-size: 25px; font-weight: bold;">✓</span>
      </div>
     
      <p>If you did not initiate this password reset, please contact our support team immediately.</p>
      <div>
        <p>For security reasons, we recommend that you:</p>
        <ul>
          <li>Use a strong, unique password</li>
          <li>Enable two-factor authentication, if available</li>
          <li>Avoid using the same password across multiple sites</li>
        </ul>
      </div>
      
      
      <p>Thanks for helping us keep your account secure.</p>
      <p>Best regards, <br>Moores</p>
      
      <div style="color: #888; margin-top: 20px; text-align: center; font-size: 15px;">
        <p>This is an automated message, please do not reply to this email</p>
      </div>
      
    </div>
  </body>
</html

`