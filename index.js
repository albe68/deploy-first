import express from "express";
import { Router } from "express";
const app=express();
const router=express.Router()





app.listen(3001,()=>{
    console.log(`1Listening to server 3001`)
});

app.use(router)
router.get("/",(req,res)=>{
    console.log("Got request")

    res.status(200).json({
        message:"uwuuu! arigato"
    })
})