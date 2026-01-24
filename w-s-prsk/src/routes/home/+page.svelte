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

    let favoritesIsEmpty=true;
    let wishlistIsEmpty=true;

    let cardStatus = {};

    function createCard(cardId){
        let img = document.createElement("img");
        img.src=cards[cardId].photo;
        img.alt=cards[cardId].name;
        img.classList.add("card");
        img.onclick = function(){
            let url = new URL(window.location.href.replace("/home", "/card"));
            url.searchParams.set("id", cardId);
            window.location.href=url;
        };

        if(cards[cardId].group=="Virtual Singer"){
            vs_container.appendChild(img);
        }else if(cards[cardId].group=="Leo/need"){
            ln_container.appendChild(img);
        }else if(cards[cardId].group=="MORE MORE JUMP!"){
            mmj_container.appendChild(img);
        }else if(cards[cardId].group=="Vivid Bad Squad"){
            vbs_container.appendChild(img);
        }else if(cards[cardId].group=="Wonderlands X Showtime"){
            wxs_container.appendChild(img);
        }else{
            n25_container.appendChild(img);
        }
        return img;
    }

    onMount(async ()=>{
        document.getElementById("favoritesDiv").style.display = "none";
        document.getElementById("wishlistDiv").style.display = "none";

        let userInventory;
        let userWishlist;

        await axios.get("/getData")
        .then((response)=>{
            userInventory=response.data.inventory;
            userWishlist=response.data.wishlist;
        })
        .catch((e)=>{
            console.log(e);
        });

        for(let i in cards){
            let img = createCard(i);
            if(!Object.keys(userInventory).includes(i)){
                img.classList.add("card-grayscale");
                if(userWishlist.includes(i)){
                    let dupeImg = img.cloneNode(true);
                    dupeImg.onclick = img.onclick;
                    document.getElementById("wishlistDiv").appendChild(dupeImg);
                    wishlistIsEmpty = false;
                }
            }else{
                if(userInventory[i].favorite){
                    let dupeImg = img.cloneNode(true);
                    dupeImg.onclick = img.onclick;
                    document.getElementById("favoritesDiv").appendChild(dupeImg);
                    favoritesIsEmpty = false;
                }
            }

            cardStatus[i] = {
                isObtained: Object.keys(userInventory).includes(i),
                isFavorite: Object.keys(userInventory).includes(i)? userInventory[i].favorite:false,
                isWishlist: userWishlist.includes(i)
            }
        }

        console.log(cardStatus);

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
        document.getElementById("allCardsDiv").style.display = "grid";
        document.getElementById("favoritesDiv").style.display = "none";
        document.getElementById("wishlistDiv").style.display = "none";
    }

    function favoritesDisplay(){
        document.getElementById("allCardsDiv").style.display = "none";
        document.getElementById("favoritesDiv").style.display = "grid";
        document.getElementById("wishlistDiv").style.display = "none";
    }

    function wishlistDisplay(){
        document.getElementById("allCardsDiv").style.display = "none";
        document.getElementById("favoritesDiv").style.display = "none";
        document.getElementById("wishlistDiv").style.display = "grid";
    }

    function toggleFilter(){
        document.getElementById("filterOptions").style.display = "block";
    }

    function cancelFilter(){
        document.getElementById("filterOptions").style.display = "none";
    }

    function selectFilter(){
        vs_container.replaceChildren();
        ln_container.replaceChildren();
        mmj_container.replaceChildren();
        vbs_container.replaceChildren();
        wxs_container.replaceChildren();
        n25_container.replaceChildren();

        document.getElementById("favoritesDiv").replaceChildren();
        document.getElementById("wishlistDiv").replaceChildren();

        let obtainedOrNot = document.getElementById("filterOptions").querySelector("input[name='obtained-or-not']:checked").value;

        if(obtainedOrNot=="obtained"){
            for(let i in cards){
                if(cardStatus[i].isObtained){
                    let img = createCard(i);
                    if(cardStatus[i].isFavorite){
                        let dupeImg = img.cloneNode(true);
                        dupeImg.onclick = img.onclick;
                        document.getElementById("favoritesDiv").appendChild(dupeImg);
                    }
                }
            }
        }else if(obtainedOrNot=="unobtained"){
            for(let i in cards){
                if(!cardStatus[i].isObtained){
                    let img = createCard(i);
                    img.classList.add("card-grayscale");
                    if(cardStatus[i].isWishlist){
                        let dupeImg = img.cloneNode(true);
                        dupeImg.onclick = img.onclick;
                        document.getElementById("wishlistDiv").appendChild(dupeImg);
                    }
                }
            }
        }else{
            for(let i in cards){
                let img = createCard(i);
                if(!cardStatus[i].isObtained){
                    img.classList.add("card-grayscale");
                }
                if(cardStatus[i].isFavorite){
                        let dupeImg = img.cloneNode(true);
                        dupeImg.onclick = img.onclick;
                        document.getElementById("favoritesDiv").appendChild(dupeImg);
                }
                if(cardStatus[i].isWishlist){
                        let dupeImg = img.cloneNode(true);
                        dupeImg.onclick = img.onclick;
                        document.getElementById("wishlistDiv").appendChild(dupeImg);
                }
            }
        }

        document.getElementById("filterOptions").style.display = "none";
    }
</script>

<div class="nav-flex">
    <div>
        <button onclick={cardsDisplay}>Cards</button>
        <button onclick={favoritesDisplay}>Favorites</button>
        <button onclick={wishlistDisplay}>Wishlist</button>
    </div>
    <div>
        <button onclick={toggleFilter}>Filter</button>
    </div>
</div>
<div class="grid-container allCards" id="allCardsDiv">
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
<div class="grid-container grid favorites" id="favoritesDiv">
</div>
<div class="grid-container grid wishlist" id="wishlistDiv">
</div>

<div class="filter-options" id="filterOptions">
    <div>
        <input type="radio" name="obtained-or-not" id="all" value="all" checked="true">
        <label for="all">All</label>
        <br>
        <input type="radio" name="obtained-or-not" id="obtained" value="obtained">
        <label for="obtained">Obtained only</label>
        <br>
        <input type="radio" name="obtained-or-not" id="unobtained" value="unobtained">
        <label for="obtained">Unobtained only</label>
        <br>
    </div>
    <div class="select-cancel">
        <button class="select-btn" onclick={selectFilter}>Select</button>
        <button class="select-btn" onclick={cancelFilter}>Cancel</button>
    </div>
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

    .nav-flex{
        display: flex;
        width: 80vw;
        margin: auto;
        justify-content: space-between;
    }

    .filter-options{
        width: 60vw;
        height: 70vh;
        position: absolute;
        background-color: rgb(234, 154, 154);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        box-sizing: border-box;
        padding: 15px;
    }

    .select-cancel{
        display: flex;
        width: 90%;
        position: fixed;
        bottom:0;
        left:50%;
        transform: translateX(-50%);
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
    }

    .select-btn{
        width: 48%;
        background-color: white;
    }
</style>
