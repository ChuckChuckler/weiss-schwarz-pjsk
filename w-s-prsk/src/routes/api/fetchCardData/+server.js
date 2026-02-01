import { json } from "@sveltejs/kit";
import MongoDB, { MongoClient } from "mongodb";
import crypto from "node:crypto";

let uri = MONGO_URI;
const client = new MongoClient(uri);
client.connect();
let db = client.db(DB_NAME);
let coll = db.collection(COLL_NAME);

export async function POST({request}){
    let {username, cardId} = await request.json();
    let isObtained=false;
    let isFavorite = false;
    let onWishlist = false;
    if(username!=""){
        let userdata = await coll.findOne({username:username});
        let cardData = userdata.inventory;
        if(Object.keys(cardData).includes(cardId)){
            isObtained=true;
            isFavorite=cardData[cardId].favorite;
        }else if(userdata.wishlist.includes(cardId)){
            onWishlist=true;
        }
        return json({
            isFavorite:isFavorite,
            isObtained:isObtained,
            onWishlist:onWishlist,
        });
    }
}