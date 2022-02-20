import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async ()=> {
    const URI = process.env.MONGO_URI;

    // handle error at the point of connection
    try {
       const con = await mongoose.connect(URI);

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