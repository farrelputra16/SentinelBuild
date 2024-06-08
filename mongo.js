import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/") //jika eror sentinelbuild hapus
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("mongo dailed");
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

export default collection ;
