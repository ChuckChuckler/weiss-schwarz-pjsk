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

    let cardId;
    let isObtained;

    onMount(()=>{
        let searchParams = new URLSearchParams(window.location.search);
        cardId = searchParams.get("id");
        isObtained = JSON.parse(searchParams.get("obtained"));

        cardName = cards[cardId].name;
        cardPhoto = cards[cardId].photo;
        cardRarity = cards[cardId].rarity;
        cardChar = cards[cardId].character;
        cardGroup = cards[cardId].group;

        if(!isObtained){
            document.getElementById("card-img").classList.add("card-grayscale");
            obtainedText = "Not Obtained";
        }else{
            obtainedText = "Obtained";
        }
    });

    function goHome(){
        goto("/home");
    }

    function update(){
        console.log(isObtained)
        axios.post("/add-card", {
            cardId:cardId,
            add:!isObtained
        });
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
        <button onclick={update}>Trigger</button>
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
