import mongoose, { Mongoose } from "mongoose";
import { DbName } from "../constants.js";


const connectToDb = async () => {
  try {

    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DbName}`)
    console.log(
      `\n conneccte to mongo db dbHost :${connectionInstance.connection.host}
      \n this is from db index.js`
    );
  } 
  catch
   {
    console.log("mongoose alert it did not connected");
    process.exit(1);
  }
};
export default connectToDb;
