import express from "express";
import { Router } from "express";
const app=express();
const router=express.Router()
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import cors from "cors"




app.use(cors({
    origin:["http://localhost:3000","https://deploy-first-iiho.onrender.com/","http://localhost:3001"]
}))
app.listen(3001,()=>{
    console.log(`1Listening to server 3001`)
});

app.use(express.json())
app.use(router)

const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers
});

await graphqlServer.start();

app.use(
    "/graphql",
    express.json(),
    expressMiddleware(graphqlServer)
);

// app.use(express.json())
router.get("/",(req,res)=>{
    console.log("Got request")

    res.status(200).json({
        message:"uwuuu! arigato"
    })
})

router.post("/user-entry",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message:"User entered",
        body:req.body
    })
})