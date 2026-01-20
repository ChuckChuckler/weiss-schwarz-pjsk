import express from "express";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "crypto";

const app = express();
app.use(express.json());

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(CLUSTER_NAME);

let username;
let password;

app.post("/signup", async(req, res)=>{
    let user = req.body.user;
    let pass = req.body.pass;
    res.send({msg:`User: ${user}; Pass: ${pass}`});
});


app.listen(3000, ()=>{
    console.log("successfully listening");
});