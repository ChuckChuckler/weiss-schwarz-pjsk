import express from "express";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "crypto";

const app = express();
app.use(express.json());

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(COLLECTION_NAME);

let username="";
let password="";

app.post("/signup", async(req, res)=>{
    let user = req.body.user;
    let pass = req.body.pass;

    try{
        if(await coll.findOne({username:user})){
            console.log(coll.findOne({username:user}));
            res.send({msg:"This username already exists"});
        }else{
            let hash = crypto.createHash("sha256");
            coll.insertOne({
                username:user,
                password:hash.update(pass).digest("hex"),
                inventory:{}
            });
            username=user;
            res.send({
                msg:"Success! Loading...",
                username:user
            });
        }
    }catch(e){
        res.send({msg:`Error: ${e}`});
    }
});

app.post("/login", async(req, res)=>{
    let user = req.body.user;
    let pass = req.body.pass;
    try{
        if(await coll.findOne({username:user})){
            let hash = crypto.createHash("sha256");
            if(await coll.findOne({username:user, password:hash.update(pass).digest("hex")})){
                username=user;
                res.send({
                    msg:`Success! Loading...`,
                    username: user
                });
            }else{
                res.send({msg:`Incorrect password`});
            }
        }else{
            res.send({msg:`No such username found`});
        }
    }catch(e){
        res.send({msg:`Error: ${e}`});
    }
});

app.get("/get-data", async(req, res)=>{
    if(username!=""){
        let userInfo = await coll.findOne({username:username});
        res.send({
            msg:"success",
            inventory:userInfo.inventory,
        });
    }
    res.send({msg:"Error!"});
});

app.listen(3000, ()=>{
    console.log("successfully listening");
});