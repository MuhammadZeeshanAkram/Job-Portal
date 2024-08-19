import mongoose from "mongoose";

export const connection = () => { //here we made a call back function called connection
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        console.log("MongoDB Connected");
    }).catch(()=>{
        console.log(`MongoDB not connected as error is: ${err}`);
    })
}