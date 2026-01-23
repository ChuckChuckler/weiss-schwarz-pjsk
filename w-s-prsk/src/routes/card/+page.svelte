<script>
    import {onMount} from "svelte";
    import {cards} from "./../scripts/cardData";

    let cardName = $state("");
    let cardPhoto = $state("");
    let cardRarity = $state("");
    let cardChar = $state("");
    let cardGroup = $state("");

    onMount(()=>{
        let searchParams = new URLSearchParams(window.location.search);
        let cardId = searchParams.get("id");
        let isObtained = JSON.parse(searchParams.get("obtained"));

        cardName = cards[cardId].name;
        cardPhoto = cards[cardId].photo;
        cardRarity = cards[cardId].rarity;
        cardChar = cards[cardId].character;
        cardGroup = cards[cardId].group;

        if(!isObtained){
            document.getElementById("card-img").classList.add("card-grayscale");
        }
    });
</script>
<h1>{cardName}</h1>
<img src={cardPhoto} alt={cardName} id="card-img"/>
<h2>{cardChar} - {cardGroup}</h2>
<h2>Rarity: {cardRarity}</h2>

<style>
    :global(.card-grayscale){
        filter: grayscale(100%);
    }
</style>
