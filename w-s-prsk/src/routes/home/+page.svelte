<script>
    import axios from "axios";
    import {onMount} from "svelte";
    import {cards} from "./../scripts/cardData"; 

    let vs_container;
    let ln_container;
    let mmj_container;
    let vbs_container;
    let wxs_container;
    let n25_container;

    let allCardsContainers;
    let favoritesContainer;
    let wishlistContainer;

    let favoritesIsEmpty=true;
    let wishlistIsEmpty=true;

    onMount(async ()=>{
        favoritesContainer.style.display = "none";
        wishlistContainer.style.display = "none";

        let userInventory;
        let userWishlist;

        await axios.get("/getData")
        .then((response)=>{
            console.log(response.data);
            userInventory=response.data.inventory;
            userWishlist=response.data.wishlist;
        })
        .catch((e)=>{
            console.log(e);
        });

        console.log(userWishlist);

        for(let i in cards){
            let img = document.createElement("img");
            img.src=cards[i].photo;
            img.alt=cards[i].name;
            img.classList.add("card");
            img.onclick = function(){
                let url = new URL(window.location.href.replace("/home", "/card"));
                url.searchParams.set("id", i);
                window.location.href=url;
            };

            if(!Object.keys(userInventory).includes(i)){
                img.classList.add("card-grayscale");
                if(userWishlist.includes(i)){
                    let dupeImg = img.cloneNode(true);
                    wishlistContainer.appendChild(dupeImg);
                    wishlistIsEmpty = false;
                }
            }else{
                if(userInventory[i].favorite){
                    let dupeImg = img.cloneNode(true);
                    favoritesContainer.appendChild(dupeImg);
                    favoritesIsEmpty = false;
                }
            }

            if(cards[i].group=="Virtual Singer"){
                vs_container.appendChild(img);
            }else if(cards[i].group=="Leo/need"){
                ln_container.appendChild(img);
            }else if(cards[i].group=="MORE MORE JUMP!"){
                mmj_container.appendChild(img);
            }else if(cards[i].group=="Vivid Bad Squad"){
                vbs_container.appendChild(img);
            }else if(cards[i].group=="Wonderlands X Showtime"){
                wxs_container.appendChild(img);
            }else{
                n25_container.appendChild(img);
            }
        }

        if(favoritesIsEmpty){
            let message = document.createElement("h1");
            message.innerText = "Nothing in your favorites yet!";
            favoritesContainer.appendChild(message);
        }

        if(wishlistIsEmpty){
            let message = document.createElement("h1");
            message.innerText = "Nothing in your wishlist yet!";
            wishlistContainer.appendChild(message);
        }
    });

    function cardsDisplay(){
        allCardsContainers.style.display = "grid";
        favoritesContainer.style.display = "none";
        wishlistContainer.style.display = "none";
    }

    function favoritesDisplay(){
        allCardsContainers.style.display = "none";
        favoritesContainer.style.display = "grid";
        wishlistContainer.style.display = "none";
    }

    function wishlistDisplay(){
        allCardsContainers.style.display = "none";
        favoritesContainer.style.display = "none";
        wishlistContainer.style.display = "grid";
    }

</script>

<button onclick={cardsDisplay}>Cards</button>
<button onclick={favoritesDisplay}>Favorites</button>
<button onclick={wishlistDisplay}>Wishlist</button>
<div class="grid-container allCards" bind:this={allCardsContainers}>
    <div bind:this={vs_container} class="grid vs-grid">
    </div>
    <div bind:this={ln_container} id="Leo/need" class="grid ln-grid">
    </div>
    <div bind:this={mmj_container} id="MORE MORE JUMP!" class="grid mmj-grid">
    </div>
    <div bind:this={vbs_container} id="Vivid Bad Squad" class="grid vbs-grid">
    </div>
    <div bind:this={wxs_container} id="Wonderlands x Showtime" class="grid wxs-grid">
    </div>
    <div bind:this={n25_container} id="Nightcord at 25:00" class="grid n25-grid">
    </div>
</div>
<div class="grid-container grid favorites" bind:this={favoritesContainer}>
</div>
<div class="grid-container grid wishlist" bind:this={wishlistContainer}>
</div>

<style>
    :global(.card){
        width: 18vw;
    }

    :global(.card-grayscale){
        filter: grayscale(100%);
    }
    
    .grid{
        display: grid;
        width: 100%;
        background-color: rgb(152, 152, 227);
        grid-template-columns: auto auto auto auto;
        row-gap: 5vw;
        box-sizing: border-box;
        padding: 5vw;
    }

    .grid-container{
        overflow-y: auto;
        height: 90vh;
        display: grid;
    }
</style>
