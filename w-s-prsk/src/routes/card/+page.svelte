<script>
    import {onMount} from "svelte";
    import {cards} from "./../scripts/cardData";
    import {goto} from "$app/navigation";
    import { updated } from "$app/state";
    import axios from "axios";

    let cardName = $state("");
    let cardPhoto = $state("");
    let cardRarity = $state("");
    let cardChar = $state("");
    let cardGroup = $state("");
    let obtainedText = $state("");
    let favoriteText = $state("");
    let wishlistText = $state("");
    let favoriteDisplay = $state("none");
    let wishlistDisplay = $state("none");

    let addToInventory = $state("Add to Inventory");

    let cardId;
    let isObtained;
    let isFavorite;
    let onWishlist;

    onMount(async ()=>{
        let searchParams = new URLSearchParams(window.location.search);
        cardId = searchParams.get("id");

        cardName = cards[cardId].name;
        cardPhoto = cards[cardId].photo;
        cardRarity = cards[cardId].rarity;
        cardChar = cards[cardId].character;
        cardGroup = cards[cardId].group;

        await axios.post("/fetchCardData",{
            cardId:cardId
        })
        .then((response)=>{
            isObtained = response.data.isObtained;
            isFavorite = response.data.isFavorite;
            onWishlist = response.data.onWishlist;
        })
        .catch((e)=>{
            console.log(e);
        });

        changeDisplays(isObtained);
    });

    function changeDisplays(isObtained){
        if(!isObtained){
            document.getElementById("card-img").classList.add("card-grayscale");
            obtainedText = "Not Obtained";
            addToInventory = "Add to Inventory";
            wishlistDisplay="block";
            favoriteDisplay="none";
        }else{
            document.getElementById("card-img").classList.remove("card-grayscale");
            obtainedText = "Obtained";
            addToInventory = "Remove from Inventory";
            wishlistDisplay="none";
            favoriteDisplay="block";
        }

        if(isFavorite){
            favoriteText = "Unfavorite";
        }else{
            favoriteText = "Favorite";
        }

        if(onWishlist){
            wishlistText = "Remove from Wishlist";
        }else{
            wishlistText = "Add to Wishlist";
        }
    }

    function goHome(){
        goto("/home");
    }

    function update(){
        axios.post("/addCard", {
            cardId:cardId,
            add:!isObtained
        });
        isObtained=!isObtained;
        changeDisplays(isObtained);
    }
    
    async function setFavorite(){
        if(favoriteText=="Unfavorite"){
            favoriteText="Favorite";
            isFavorite=false;
        }else{
            favoriteText="Unfavorite";
            isFavorite=true;
        }

        await axios.post("/setFavorite", {
            id:cardId,
            favorite:isFavorite
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    async function addWishlist(){
        await axios.post("/addToWishlist", {
            id:cardId,
            onWishlist:onWishlist
        })
        .catch((e)=>{
            console.log(e);
        });

        if(wishlistText=="Add to Wishlist"){
            wishlistText="Remove from Wishlist";
            onWishlist = true;
        }else{
            wishlistText="Add to Wishlist";
            onWishlist = false;
        }
    }
</script>

<button onclick={goHome}>Back to Home</button>

<div class="flex-container">
    <div class="inner-flex">
        <h1>{cardName}</h1>
        <img src={cardPhoto} alt={cardName} id="card-img"/>
        <h2>{cardChar} - {cardGroup}</h2>
        <h2>Rarity: {cardRarity}</h2>
    </div>
    <div class="inner-flex">
        <h1>{obtainedText}</h1>
        <button onclick={update}>{addToInventory}</button>
        <br>
        <button onclick={setFavorite} style={`display:${favoriteDisplay}`}>{favoriteText}</button>
        <button onclick={addWishlist} style={`display:${wishlistDisplay}`}>{wishlistText}</button>
    </div>
</div>

<style>
    :global(.card-grayscale){
        filter: grayscale(100%);
    }

    .flex-container{
        display: flex;
        width: 98%;
        justify-content: space-around;
        margin: auto;
    }

    .inner-flex{
        background-color: rgb(169, 238, 238);
        width: 49%;
    }
</style>
