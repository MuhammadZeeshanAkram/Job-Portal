import app from "./app.js";


app.listen(process.env.PORT,()=>{     // the ()=> is a call back function ,means when the port number 4000 is excessed then it print the message "(`server listening at port ${4000}`);"
    console.log(`server listening at port ${process.env.PORT}`);
});