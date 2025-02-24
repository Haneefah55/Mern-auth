import dotenv from 'dotenv'
import { MailtrapClient } from "mailtrap"

dotenv.config()

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Moores",
};

/*

const recipients = [
  {
    email: "olasupoomotayo@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
  
  */