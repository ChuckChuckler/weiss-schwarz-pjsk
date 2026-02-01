import { json } from "@sveltejs/kit";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "node:crypto";

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(COLL_NAME);

export async function POST({request}){
    let {username, cardId, onWishlist} = await request.json();
    if(username!=""){
        try{
            if(onWishlist){ //remove from wishlist if so
                coll.updateOne({username:username},{
                    $pull:{
                        wishlist:cardId
                    }
                });
            }else{ //add to wishlist
                coll.updateOne({username:username},{
                    $push:{
                        wishlist: cardId
                    }
                });
            }
        
            return json({msg:"success"});
        }catch(e){
            return json({err:e})
        }
    }
}