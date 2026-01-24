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

app.get("/getData", async(req, res)=>{
    if(username!=""){
        let userInfo = await coll.findOne({username:username});
        console.log(userInfo);
        res.send({
            msg:"success",
            inventory:userInfo.inventory,
        });
    }else{
        res.send({msg:"Error!"});
    }
});

app.post("/fetchCardData", async(req, res)=>{
    let cardId = req.body.cardId;
    let isObtained=false;
    let isFavorite = false;
    if(username!=""){
        let userdata = await coll.findOne({username:username});
        let cardData = userdata.inventory;
        if(Object.keys(cardData).includes(cardId)){
            isObtained=true;
            isFavorite=cardData[cardId].favorite;
        }
        res.send({
            isFavorite:isFavorite,
            isObtained:isObtained
        });
    }
})

app.post("/addCard", async(req, res)=>{
    let cardId = req.body.cardId;
    let add = req.body.add;
    if(username!=""){
        try{
            let userData = await coll.findOne({username:username});
            let userInventory = userData.inventory;
            if(add){
                userInventory[cardId] = {
                    number:0,
                    favorite: false
                }
            }else{
                delete userInventory[cardId];
            }
            coll.updateOne({username:username},{
                $set:{
                    inventory:userInventory
                }
            });
        }catch(e){
            res.send({error:e});
        }
    }
});

app.post("/setFavorite", async(req, res)=>{
    let cardId = req.body.id;
    let favorite=req.body.favorite;
    if(username!=""){
        try{
            let userdata = await coll.findOne({username:username});
            let userInventory = userdata.inventory;
            userInventory[cardId].favorite=favorite;
            await coll.updateOne({username:username},{
                $set:{
                    inventory:userInventory
                }
            });
            res.send({msg:"success"});
        }catch(e){
            res.send({error: e});
        }
    }
})

app.listen(3000, ()=>{
    console.log("successfully listening");
});