import { json } from "@sveltejs/kit";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "node:crypto";

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(COLL_NAME);

export async function POST({request}){
    let {username} = await request.json();
    if(username!=""){
        let userInfo = await coll.findOne({username:username});
        return json({
            msg:"success",
            inventory:userInfo.inventory,
            wishlist:userInfo.wishlist,
        });
    }else{
        return json({msg:"Error!"});
    }
}