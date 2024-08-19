import express from "express";
import {config} from "dotenv"; //here we are importing the secret thing throught the dotenv file which contains every variable secret key 
import cors from "cors"; //it is just used to connect frontend with backend means core is used here as a middleware

const app = express();
config({path:"./config/config.env"})

app.use(cors({
     origin:[process.env.FRONTEND_URL],
     methods:["GET","POST","PUT","DELETE"],//now changes if made in frontend or backend will be reflected in both the backend and frontend if the credentials are true of user
     credentials: true,
})
);

//In frontend if we login or register the user then the token is generated which is called JWT tokens(JSON WEB TOKENS) , NOW if we want to access that data in the backend folder then  we have to use the package called 'cookie parser'

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));//express.json and express.urlencode are both middlewares through which we can detect whether the data coming from the frontend is in which format or json or not. And these middlewares are used to parse the data coming from frontend to json format 


export default app;