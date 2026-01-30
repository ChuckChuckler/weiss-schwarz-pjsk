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
            document.getElementById("cardImg").classList.add("card-grayscale");
            obtainedText = "Not Obtained";
            addToInventory = "Add to Inventory";
            wishlistDisplay="block";
            favoriteDisplay="none";
        }else{
            document.getElementById("cardImg").classList.remove("card-grayscale");
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

<div class="bg"></div>

<button class="home-btn" onclick={goHome}>Back to Home</button>

<div class="flex-container">
    <div class="inner-flex-left">
        <img src={cardPhoto} alt={cardName} id="cardImg" class="card-img"/>
    </div>
    <div class="inner-flex-right">
        <h1 class="card-name">{cardName}</h1>
        <h2 class="subtitle">{cardChar} • {cardGroup}</h2>
        <h2 class="subtitle">Rarity: {cardRarity}</h2>
        <br>
        <br>
        <hr class="card-info-divider">
        <br>
        <h1 class="subtitle">{obtainedText}</h1>
        <br>
        <div class="buttons-flex">
            <button onclick={update} class="ctrl-btn">{addToInventory}</button>
            <button onclick={setFavorite} style={`display:${favoriteDisplay}`} class="ctrl-btn">{favoriteText}</button>
            <button onclick={addWishlist} style={`display:${wishlistDisplay}`} class="ctrl-btn">{wishlistText}</button>
        </div>
    </div>
</div>

<style>
    :global(.card-grayscale){
        filter: grayscale(100%);
    }

    .home-btn{
        background-color: #FFA1A1;
        width: 15%;
        height: 30px;
        border-radius: 10px;
        margin: 5px;
        color: #3a1818;
        font-weight: 500;
    }

    .home-btn:hover{
        background-color: #ff8181;
    }

    .bg{
        width: 100vw;
        height: 100vh;
        z-index: -1;
        position: absolute;
        background-image: linear-gradient(to bottom, #E9FEFF, #9bdffe);
    }

    .flex-container{
        display: flex;
        width: 98%;
        justify-content: space-around;
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .inner-flex-left{
        width: 39%;
    }

    @keyframes inner-flex-right-1{
        from{
            width: 69%;
        }
        to{
            width: 72%;
        }
    }

    @keyframes inner-flex-right-2{
        to{
            width: 69%;
        }
        from{
            width: 72%;
        }
    }

    .inner-flex-right{
        width: 69%;
        background-color: #FFA1A1;
        border-radius: 25px;
        box-sizing: border-box;
        padding: 25px;
        position: relative;
        border: #A0C9FF 8px solid;
        animation: inner-flex-right-2 0.5s ease-out;
    }

    .inner-flex-right:hover{
        width: 72%;
        animation: inner-flex-right-1 0.5s ease-out;
    }

    .card-name{
        font-family: "Madimi One", sans-serif;
        font-size: 40px;
        color: #312D45;
        text-align: center;
    }

    .subtitle{
        font-family: "Madimi One", sans-serif;
        font-size: 28px;
        color: #3a3552;
        text-align: center;
    }

    .buttons-flex{
        display: flex;
        width: 90%;
        justify-content: space-around;
        margin: auto;
    }

    @keyframes ctrl-btn-1{
        from{
            width: 47%;
            height: 70px;
        }
        to{
            width: 49%;
            height: 73px;
        }
    }

    @keyframes ctrl-btn-2{
        to{
            width: 47%;
            height: 70px;
        }
        from{
            width: 49%;
            height: 73px;
        }
    }

    .ctrl-btn{
        background-color: #ffebae;
        width: 47%;
        height: 70px;
        border-radius: 12px;
        font-family: "Madimi One", sans-serif;
        font-size: 20px;
        color: #725e20;
        animation: ctrl-btn-2 0.5s ease-out;
    }

    .ctrl-btn:hover{
        background-color: #ffe494;
        width: 49%;
        height: 73px;
        animation: ctrl-btn-1 0.5s ease-out;
    }

    .card-info-divider{
        border: #ffe494 1.5px solid;
    }
</style>
