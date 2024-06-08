import express from "express";
import  collection  from "./mongo.js";
import cors from "cors";
const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())



server.get("/",cors(),()=>{

})


server.post("/",async(req,res)=>{
    const{email}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



server.listen(8000,()=>{
    console.log("port connected");
})