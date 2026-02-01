import { json } from "@sveltejs/kit";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "node:crypto";

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(COLL_NAME);

export async function POST({request}){
    let {username, cardId, add} = await request.json();
    if(username!=""){
        try{
            let userData = await coll.findOne({username:username});
            let userInventory = userData.inventory;
            if(add){
                userInventory[cardId] = {
                    number:0,
                    favorite: false
                }
                coll.updateOne({username:username},{
                    $pull:{
                        wishlist:cardId
                    }
                });
            }else{
                delete userInventory[cardId];
            }
            coll.updateOne({username:username},{
                $set:{
                    inventory:userInventory
                }
            });
            return json({msg:"success"});
        }catch(e){
            return json({error:e});
        }
    }
}