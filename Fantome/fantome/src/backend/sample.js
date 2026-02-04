import dotenv from "dotenv";
import emailService from "./services/emailService.js";


dotenv.config()
emailService.sendSimpleMessage();
