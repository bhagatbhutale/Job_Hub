import mongoose from 'mongoose';

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI, {
         serverSelectionTimeoutMS: 5000,
       });
       console.log("Database connected ✅")
    } catch (error) {
        console.log("Database connection failed ❌", error);
        process.exit(1);
    }
}

export default connectDB

