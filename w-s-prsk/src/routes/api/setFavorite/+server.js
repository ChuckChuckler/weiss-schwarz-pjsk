import { json } from "@sveltejs/kit";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "node:crypto";

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(COLL_NAME);

export async function POST({request}){
    let {username, cardId, favorite} = await request.json();
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
            return json({msg:"success"});
        }catch(e){
            return json({error: e});
        }
    }
}