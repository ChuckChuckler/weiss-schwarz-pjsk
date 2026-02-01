import {json} from "@sveltejs/kit";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "node:crypto";

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(COLL_NAME);

export async function POST({request}){
    let {user, pass} = await request.json();
    try{
        if(await coll.findOne({username:user})){
            return json({msg:"This username already exists"});
        }else{
            let hash = crypto.createHash("sha256");
            coll.insertOne({
                username:user,
                password:hash.update(pass).digest("hex"),
                inventory:{},
                wishlist:[]
            });
            return json({
                msg:"Success! Loading...",
                username:user
            });
        }
    }catch(e){
        return json({msg:`Error: ${e}`});
    }
}