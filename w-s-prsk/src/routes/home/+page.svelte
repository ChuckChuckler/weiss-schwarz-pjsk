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

    onMount(async ()=>{
        let userInventory;
        await axios.get("/getData")
        .then((response)=>{
            userInventory=response.data.inventory;
        })
        .catch((e)=>{
            console.log(e);
        });

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
    });

</script>

<h1>Cards</h1>

<div class="grid-container">
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
