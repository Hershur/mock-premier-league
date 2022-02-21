import mongoose from 'mongoose';
import { MONGO_URI } from '../config';


const connectDB = async ()=> {

    // handle error at the point of connection
    try {
       const con = await mongoose.connect(MONGO_URI);

       console.log(`Successfully connected to database: ${con.connection.host}`);
        
    } catch (error) {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
        
    };

    //handle error after connection has been established
    mongoose.connection.on('error', err => {
        console.log(err);
    });

};


export default connectDB;