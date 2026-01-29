<script>
    import axios from "axios";
    import {onMount} from "svelte";
    import {cards} from "./../scripts/cardData"; 

    import vsLogo from "$lib/assets/vsLogo.png";
    import lnLogo from "$lib/assets/lnLogo.png";
    import mmjLogo from "$lib/assets/mmjLogo.png";
    import vbsLogo from "$lib/assets/vbsLogo.png";
    import wxsLogo from "$lib/assets/wxsLogo.png";
    import n25Logo from "$lib/assets/n25Logo.png";

    import miku from "$lib/assets/mikuIcon.png";
    import rin from "$lib/assets/rinIcon.png";
    import len from "$lib/assets/lenIcon.png";
    import luka from "$lib/assets/lukaIcon.png";
    import meiko from "$lib/assets/meikoIcon.png";
    import kaito from "$lib/assets/kaitoIcon.png";
    import ichika from "$lib/assets/ichikaIcon.png";
    import saki from "$lib/assets/sakiIcon.png";
    import honami from "$lib/assets/honamiIcon.png";
    import shiho from "$lib/assets/shihoIcon.png";
    import minori from "$lib/assets/minoriIcon.png";
    import haruka from "$lib/assets/harukaIcon.png";
    import airi from "$lib/assets/airiIcon.png";
    import shizuku from "$lib/assets/shizukuIcon.png";
    import kohane from "$lib/assets/kohaneIcon.png";
    import an from "$lib/assets/anIcon.png";
    import akito from "$lib/assets/akitoIcon.png";
    import toya from "$lib/assets/toyaIcon.png";
    import tsukasa from "$lib/assets/tsukasaIcon.png";
    import emu from "$lib/assets/emuIcon.png";
    import nene from "$lib/assets/neneIcon.png";
    import bbg from "$lib/assets/bbgIcon.png";
    import kanade from "$lib/assets/kanadeIcon.png";
    import mafuyu from "$lib/assets/mafuyuIcon.png";
    import ena from "$lib/assets/enaIcon.png";
    import mizuki from "$lib/assets/mizukiIcon.png";

    function randint(max){
        const array = new Uint16Array(1);
        crypto.getRandomValues(array);
        const randNum = array[0]%(max);
        return randNum;
    }

    function sleep(ms){
        return new Promise(r=>setTimeout(r, ms));
    }

    let vs_container;
    let ln_container;
    let mmj_container;
    let vbs_container;
    let wxs_container;
    let n25_container;

    let favoritesIsEmpty=true;
    let wishlistIsEmpty=true;

    let cardStatus = {};

    let SSPs = [];
    let RRRs = [];
    let SRs = [];
    let RRs = [];
    let Rs = [];
    let Us = [];
    let Cs = [];
    let CCs = [];

    let wantedCards = [];

    function createCard(cardId, sendToLink, addToInventory, blankTab){
        let img = document.createElement("img");
        img.src=cards[cardId].photo;
        img.alt=cards[cardId].name;
        img.classList.add("card");
        if(sendToLink){
            img.onclick = function(){
                let url = new URL(window.location.href.replace("/home", "/card"));
                url.searchParams.set("id", cardId);
                if(blankTab){
                    window.open(url, "_blank");
                }else{
                    window.location.href = url;
                }
            };
        }

        if(addToInventory){
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
        }

        return img;
    }

    function createCheckboxCard(cardId){
        let img = document.createElement("img");
        img.src=cards[cardId].photo;
        img.alt=cards[cardId].name;
        img.classList.add("card-check");
        img.onclick = function(){checkCard(cardId)};
        if(!wantedCards.includes(cardId)){
            img.classList.add("card-grayscale");
        }
        img.id = cardId;
        document.getElementById("cardPicker").append(img);
        img.dataset.checked = false;
    }

    function checkCard(cardId){
        let imgToCheck = document.getElementById(cardId);
        if(!JSON.parse(imgToCheck.dataset.checked)){
            imgToCheck.classList.remove("card-grayscale");
            wantedCards.push(cardId);
            imgToCheck.dataset.checked = true;
        }else{
            imgToCheck.classList.add("card-grayscale");
            wantedCards.splice(wantedCards.indexOf(cardId),1);
            imgToCheck.dataset.checked = false;
        }
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
            let img = createCard(i, true, true, false);
            
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
            
            let cardToPick = createCheckboxCard(i);

            if(cards[i].rarity == "SSP"){
                SSPs.push(i);
            }else if(cards[i].rarity == "RRR"){
                RRRs.push(i);
            }else if(cards[i].rarity == "SR"){
                SRs.push(i);
            }else if(cards[i].rarity == "RR"){
                RRs.push(i);
            }else if(cards[i].rarity == "R"){
                Rs.push(i);
            }else if(cards[i].rarity == "U"){
                Us.push(i);
            }else if(cards[i].rarity == "C"){
                Cs.push(i);
            }else{
                CCs.push(i);
            }
        }

        if(favoritesIsEmpty){
            let message = document.createElement("h1");
            message.innerText = "Nothing in your favorites yet!";
            document.getElementById("favoritesDiv").appendChild(message);
        }

        if(wishlistIsEmpty){
            let message = document.createElement("h1");
            message.innerText = "Nothing in your wishlist yet!";
            document.getElementById("wishlistDiv").appendChild(message);
        }

        if(document.cookie){
            let allSelected = true;
            let arrCookie = document.cookie.split(";").sort((a,b)=>{
                return a.localeCompare(b);
            });
            let isObtained = arrCookie[1].split("=")[1];
            let characters = arrCookie[0].split("=")[1].split(",");
            document.getElementById("filterOptions").querySelector(`input[value='${isObtained}']`).checked = true;

            document.getElementById("filterOptions").querySelectorAll("input[name='character-group']").forEach(i=>{
                if(!characters.includes(i.value)){
                    i.checked = false;
                    allSelected = false;
                }
            });

            if(!allSelected){
                    document.getElementById("allSelected").checked = false;
            }

            selectFilter();
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

    function selectFilter(divToFilter){
        vs_container.replaceChildren();
        ln_container.replaceChildren();
        mmj_container.replaceChildren();
        vbs_container.replaceChildren();
        wxs_container.replaceChildren();
        n25_container.replaceChildren();

        document.getElementById("favoritesDiv").replaceChildren();
        document.getElementById("wishlistDiv").replaceChildren();

        let obtainedOrNot = document.getElementById("filterOptions").querySelector("input[name='obtained-or-not']:checked").value;
        let includedCharacters = [];
        let nodelist = document.getElementById("filterOptions").querySelectorAll("input[name='character-group']:checked");
        nodelist.forEach(i => {
            includedCharacters.push(i.value);
        });

        if(obtainedOrNot=="obtained"){
            for(let i in cards){
                if(cardStatus[i].isObtained && includedCharacters.includes(cards[i].character)){
                    let img = createCard(i, true, true, false);
                    if(cardStatus[i].isFavorite){
                        let dupeImg = img.cloneNode(true);
                        dupeImg.onclick = img.onclick;
                        document.getElementById("favoritesDiv").appendChild(dupeImg);
                    }
                }
            }
        }else if(obtainedOrNot=="unobtained"){
            for(let i in cards){
                if(!cardStatus[i].isObtained && includedCharacters.includes(cards[i].character)){
                    let img = createCard(i, true, true, false);
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
                if(includedCharacters.includes(cards[i].character)){
                    let img = createCard(i, true, true, false);
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
        }

        document.cookie = `obtainedOrNot=${obtainedOrNot}`;
        document.cookie = `includedCharacters=${includedCharacters}`;

        document.getElementById("filterOptions").style.display = "none";
    }

    function checkAllVS(){
        if(document.getElementById("vs").checked){
            document.getElementById("miku").checked = true;
            document.getElementById("rin").checked = true;
            document.getElementById("len").checked = true;
            document.getElementById("luka").checked = true;
            document.getElementById("meiko").checked = true;
            document.getElementById("kaito").checked = true;
        }else{
                document.getElementById("miku").checked = false;
                document.getElementById("rin").checked = false;
                document.getElementById("len").checked = false;
                document.getElementById("luka").checked = false;
                document.getElementById("meiko").checked = false;
                document.getElementById("kaito").checked = false;
        }
    }

    function checkAllLn(){
        if(document.getElementById("ln").checked){
            document.getElementById("ichika").checked = true;
            document.getElementById("saki").checked = true;
            document.getElementById("honami").checked = true;
            document.getElementById("shiho").checked = true;
        }else{
            document.getElementById("ichika").checked = false;
            document.getElementById("saki").checked = false;
            document.getElementById("honami").checked = false;
            document.getElementById("shiho").checked = false;
        }
    }

    function checkAllMMJ(){
        if(document.getElementById("mmj").checked){
            document.getElementById("minori").checked = true;
            document.getElementById("haruka").checked = true;
            document.getElementById("airi").checked = true;
            document.getElementById("shizuku").checked = true;
        }else{
            document.getElementById("minori").checked = false;
            document.getElementById("haruka").checked = false;
            document.getElementById("airi").checked = false;
            document.getElementById("shizuku").checked = false;
        }
    }

    function checkAllVBS(){
        if(document.getElementById("vbs").checked){
            document.getElementById("kohane").checked = true;
            document.getElementById("an").checked = true;
            document.getElementById("akito").checked = true;
            document.getElementById("toya").checked = true;
        }else{
            document.getElementById("kohane").checked = false;
            document.getElementById("an").checked = false;
            document.getElementById("akito").checked = false;
            document.getElementById("toya").checked = false;
        }
    }

    function checkAllWxS(){
        if(document.getElementById("wxs").checked){
            document.getElementById("tsukasa").checked = true;
            document.getElementById("emu").checked = true;
            document.getElementById("nene").checked = true;
            document.getElementById("mybbg").checked = true;
        }else{
            document.getElementById("tsukasa").checked = false;
            document.getElementById("emu").checked = false;
            document.getElementById("nene").checked = false;
            document.getElementById("mybbg").checked = false;
        }
    }

    function checkAllN25(){
        if(document.getElementById("n25").checked){
            document.getElementById("kanade").checked = true;
            document.getElementById("mafuyu").checked = true;
            document.getElementById("ena").checked = true;
            document.getElementById("mizuki").checked = true;
        }else{
            document.getElementById("kanade").checked = false;
            document.getElementById("mafuyu").checked = false;
            document.getElementById("ena").checked = false;
            document.getElementById("mizuki").checked = false;
        }
    }

    function selectAll(){
        document.getElementById("filterOptions").querySelectorAll("input[name='character-group']").forEach(i => {
            i.checked = document.getElementById("allSelected").checked;
        });
    }

    function showInventory(){
        document.getElementById("cardInventory").style.display = "block";
        document.getElementById("packSimulator").style.display = "none";
    }

    function showSimulator(){
        document.getElementById("cardInventory").style.display = "none";
        document.getElementById("packSimulator").style.display = "block";
    }

    import wsCardCover from "$lib/assets/wscard.png";

    let totalOpened=0;
    let sspCount = 0;
    let rrrCount = 0;
    let srCount = 0;
    let packCount = $state(0);
    let errmsg = $state("");

    let sspObtained = [];
    let rrrObtained = [];
    let srObtained = [];
    let rrObtained = [];
    let rObtained = [];
    let uObtained = [];
    let ccObtained = [];
    let cObtained = [];

    let stopEarly = false;

    function stopAuto(){
        stopEarly = true;
    }

    async function simulate(){
        let value = document.querySelector("input[name='openUntil']:checked").value;
        if(value=="manual"){
            document.getElementById("manualControls").style.display = "block";
            document.getElementById("openingOptions").style.display = "none";
            openPack(false);
        }else if(value=="quantityMet"){
            if(document.getElementById("quantity").value<3 || document.getElementById("quantity").value==null){
                errmsg = "Select a quantity (at least 3)";
            }else{
                errmsg = "";
                let value = document.getElementById("quantity").value;
                if(document.getElementById("skipOpening").checked){
                    for(let i = 0; i < value; i++){
                        openPack(true);
                    }
                    stopSimulate();
                }else{
                    document.getElementById("autoControls").style.display = "block";
                    for(let i = 0; i < value; i++){
                        if(!stopEarly){
                            openPack(false);
                            await sleep(2000);
                        }else{
                            break;
                        }
                    }
                    stopSimulate();
                }
            }
        }else{
            if(wantedCards.length == 0){
                errmsg = "Please select at least one card";
            }else{
                if(document.querySelector("input[name='oneOrAll']:checked").value=="one"){
                    if(document.getElementById("skipOpening2").checked){
                        let oneObtained = false;
                        while(!oneObtained){
                            let obtaineds = await openPack(true);
                            obtaineds.forEach(i=>{
                                if(wantedCards.includes(i)){
                                    oneObtained = true;
                                }
                            });
                        }
                        stopSimulate();
                    }else{
                        document.getElementById("autoControls").style.display = "block";
                        let oneObtained = false;
                        while(!oneObtained){
                            if(!stopEarly){
                                let obtaineds = await openPack(false);
                                await sleep(2000);
                                obtaineds.forEach(i=>{
                                    if(wantedCards.includes(i)){
                                        oneObtained = true;
                                    }
                                });
                            }else{
                                break;
                            }
                        }
                        stopSimulate();

                    }
                }else if(document.querySelector("input[name='oneOrAll']:checked").value=="all"){
                    if(document.getElementById("skipOpening2").checked){
                        let allObtaineds = [];
                        while(allObtaineds.length!=wantedCards.length){
                            let obtaineds = await openPack(true);
                            obtaineds.forEach(i=>{
                                if(wantedCards.includes(i) && !allObtaineds.includes(i)){
                                    allObtaineds.push(i);
                                }
                            });
                        }
                        stopSimulate();
                    }else{
                        document.getElementById("autoControls").style.display = "block";
                        let allObtaineds = [];
                        while(allObtaineds.length!=wantedCards.length){
                            if(!stopEarly){
                                let obtaineds = await openPack(false);
                                await sleep(2000);
                                obtaineds.forEach(i=>{
                                    if(wantedCards.includes(i) && !allObtaineds.includes(i)){
                                        allObtaineds.push(i);
                                    }
                                });
                            }else{
                                break;
                            }
                        }
                        stopSimulate();
                    }
                }
            }
        }
    }

    async function openPack(skip){
        packCount++;
        let cardsOpened = [];
        for(let i = 0; i < 7; i++){
            cardsOpened.push(pullCard());
        }
            
        if(!cardsOpened.includes("R") && !cardsOpened.includes("RR") && !cardsOpened.includes("SR") && !cardsOpened.includes("RRR") && !cardsOpened.includes("SSP")){
            cardsOpened.push(pullCard(true));
        }else{
            cardsOpened.push(pullCard());
        }

        totalOpened+=8;

        if(totalOpened>=2304){
            sspCount=0;
            rrrCount=0;
            srCount=0;
        }

        if(!skip){
            for(let i = 0; i < 8; i++){
                let cardCover = document.createElement("img");
                cardCover.classList.add("card");
                cardCover.name = "cardCover";
                cardCover.src = wsCardCover;
                document.getElementById("pulledCards").prepend(cardCover);
            }
            await sleep(1500);

            cardsOpened.forEach(i => {
                let img = createCard(i, false, false, false);
                document.querySelector("img[name='cardCover']").replaceWith(img);
            });
        }else{
            cardsOpened.forEach(i => {
                let img = createCard(i, false, false, false);
                document.getElementById("pulledCards").prepend(img);
            });
        }

        return cardsOpened;
    }

    function pullCard(R){
        if(R){
            return Rs[randint(Rs.length)];
        }
        let cardChosen = randint(2304);
        if(cardChosen<1 && sspCount!=1){ //SSP
            sspCount+=1;
            let chosenIndex = randint(SSPs.length);
            if(!sspObtained.includes(SSPs[chosenIndex])){
                sspObtained.push(SSPs[chosenIndex]);
                document.getElementById("sspResults").appendChild(createCard(SSPs[chosenIndex], true, false, true));
            }
            return SSPs[chosenIndex];
        }else if(cardChosen<7 && rrrCount!=4){ //RRR
            rrrCount+=1;
            let chosenIndex = randint(RRRs.length);
            if(!rrrObtained.includes(RRRs[chosenIndex])){
                rrrObtained.push(RRRs[chosenIndex]);
                document.getElementById("rrrResults").appendChild(createCard(RRRs[chosenIndex], true, false, true));
            }
            return RRRs[chosenIndex];
        }else if(cardChosen<17 && srCount!=10){ //SR
            srCount+=1;
            let chosenIndex = randint(SRs.length);
            if(!srObtained.includes(SRs[chosenIndex])){
                srObtained.push(SRs[chosenIndex]);
                document.getElementById("srResults").appendChild(createCard(SRs[chosenIndex], true, false, true));
            }
            return SRs[randint(SRs.length)];
        }else if(cardChosen<113){ //RR
            let chosenIndex = randint(RRs.length);
            if(!rrObtained.includes(RRs[chosenIndex])){
                rrObtained.push(RRs[chosenIndex]);
                document.getElementById("rrResults").appendChild(createCard(RRs[chosenIndex], true, false, true));
            }
            return RRs[chosenIndex];
        }else if(cardChosen<473){ //R
            let chosenIndex = randint(Rs.length);
            if(!rObtained.includes(Rs[chosenIndex])){
                rObtained.push(Rs[chosenIndex]);
                document.getElementById("rResults").appendChild(createCard(Rs[chosenIndex], true, false, true));
            }
            return Rs[chosenIndex];
        }else if(cardChosen<1049){ //U
            let chosenIndex = randint(Us.length);
            if(!uObtained.includes(Us[chosenIndex])){
                uObtained.push(Us[chosenIndex]);
                document.getElementById("uResults").appendChild(createCard(Us[chosenIndex], true, false, true));
            }
            return Us[chosenIndex];
        }else if(cardChosen<2201){ //C
            let chosenIndex = randint(Cs.length);
            if(!cObtained.includes(Cs[chosenIndex])){
                cObtained.push(Cs[chosenIndex]);
                document.getElementById("cResults").appendChild(createCard(Cs[chosenIndex], true, false, true));
            }
            return Cs[chosenIndex];
        }else{ //CC
            let chosenIndex = randint(CCs.length);
            if(!ccObtained.includes(CCs[chosenIndex])){
                ccObtained.push(CCs[chosenIndex]);
                document.getElementById("ccResults").appendChild(createCard(CCs[chosenIndex], true, false, true));
            }
            return CCs[chosenIndex];
        }
    }

    function stopSimulate(){
        document.getElementById("pulledCards").replaceChildren();
        document.getElementById("manualControls").style.display = "none";
        document.getElementById("autoControls").style.display = "none";
        document.getElementById("openingOptions").style.display = "block";
        document.getElementById("simulatorResults").style.display = "block";
    }

    function quantityPickerUI(){
        document.getElementById("quantityPicker").style.display = "block";
        document.getElementById("cardPickerContainer").style.display = "none";
    }

    function hideUIs(){
        document.getElementById("quantityPicker").style.display = "none";
        document.getElementById("cardPickerContainer").style.display = "none";
    }

    function specificCardUI(){
        document.getElementById("quantityPicker").style.display = "none";
        document.getElementById("cardPickerContainer").style.display = "block";
    }

    function closeResults(){
        sspObtained = [];
        rrrObtained = [];
        srObtained = [];
        rrObtained = [];
        rObtained = [];
        uObtained = [];
        ccObtained = [];
        cObtained = [];

        stopEarly = false;

        document.getElementById("sspResults").replaceChildren();
        document.getElementById("rrrResults").replaceChildren();
        document.getElementById("srResults").replaceChildren();
        document.getElementById("rrResults").replaceChildren();
        document.getElementById("rResults").replaceChildren();
        document.getElementById("uResults").replaceChildren();
        document.getElementById("ccResults").replaceChildren();
        document.getElementById("cResults").replaceChildren();

        packCount = 0;

        wantedCards = [];
        document.getElementById("cardPicker").replaceChildren();
        Object.keys(cards).forEach(i=>{
            createCheckboxCard(i);
        });

        document.getElementById("selectDeselectAll").checked = false;

        document.getElementById("simulatorResults").style.display = "none";
    }

    function searchCardPicker(){
        let searchParam = document.getElementById("searchParam").value;
        document.getElementById("cardPicker").replaceChildren();
        if(searchParam==""){
            Object.keys(cards).forEach(i=>{
                createCheckboxCard(i);
            });
        }else{
            Object.keys(cards).forEach(i=>{
                if(cards[i].rarity.toLowerCase().includes(searchParam.toLowerCase()) || cards[i].character.toLowerCase().includes(searchParam.toLowerCase()) || cards[i].group.toLowerCase().includes(searchParam.toLowerCase())){
                    createCheckboxCard(i);
                }
            });
        }
    }

    function selectDeselect(){
        if(document.getElementById("selectDeselectAll").checked){
            document.getElementById("cardPicker").childNodes.forEach(i=>{
                i.classList.remove("card-grayscale");
                if(!wantedCards.includes(i.id)){
                    wantedCards.push(i.id);
                }
            });
        }else{
            document.getElementById("cardPicker").childNodes.forEach(i=>{
                i.classList.add("card-grayscale");
                if(wantedCards.includes(i.id)){
                    wantedCards.splice(wantedCards.indexOf(i.id), 1);
                }
            });
        }
    }
</script>

<div class="web-container">
    <div class="navbar">
        <button onclick={showInventory} class="navbuttons">Inventory</button>
        <button onclick={showSimulator} class="navbuttons">Pack Simulator</button>
    </div>
    <br>
    <div class="page card-inventory" id="cardInventory">
        <div class="nav-flex">
            <div class="inventoryNav">
                <button onclick={cardsDisplay} class="inventoryNavButtons cardsNav">Cards</button>
                <button onclick={favoritesDisplay} class="inventoryNavButtons favoritesNav">Favorites</button>
                <button onclick={wishlistDisplay} class="inventoryNavButtons wishlistNav">Wishlist</button>
            </div>
            <div>
                <button onclick={toggleFilter} class="nav-flex">Filter</button>
            </div>
        </div>
        <div class="grid-container allCards" id="allCardsDiv">
            <img class="logo" src={vsLogo} alt="Virtual Singer logo">
            <div bind:this={vs_container} class="grid vs-grid">
            </div>
            <img class="logo" src={lnLogo} alt="Leo/need logo">
            <div bind:this={ln_container} id="Leo/need" class="grid ln-grid">
            </div>
            <img class="logo" src={mmjLogo} alt="More More Jump! logo">
            <div bind:this={mmj_container} id="MORE MORE JUMP!" class="grid mmj-grid">
            </div>
            <img class="logo" src={vbsLogo} alt="Vivid Bad Squad logo">
            <div bind:this={vbs_container} id="Vivid Bad Squad" class="grid vbs-grid">
            </div>
            <img class="logo" src={wxsLogo} alt="Wonderlands X Showtime logo">
            <div bind:this={wxs_container} id="Wonderlands x Showtime" class="grid wxs-grid">
            </div>
            <img class="logo" src={n25Logo} alt="Nightcord at 25:00 logo">
            <div bind:this={n25_container} id="Nightcord at 25:00" class="grid n25-grid">
            </div>
            <br>
            <br>
            <br>
        </div>
        <div class="grid-container grid favorites" id="favoritesDiv">
        </div>
        <div class="grid-container grid wishlist" id="wishlistDiv">
        </div>

        <div class="filter-options" id="filterOptions">
            <div class="option-holder">
                <h3 class="filter-div-titles">Status</h3>
                <input type="radio" name="obtained-or-not" id="all" value="all" checked="true" class="filter-radio">
                <label for="all" class="filter-div-labels">All</label>
                <br>
                <input type="radio" name="obtained-or-not" id="obtained" value="obtained" class="filter-radio">
                <label for="obtained" class="filter-div-labels">Obtained only</label>
                <br>
                <input type="radio" name="obtained-or-not" id="unobtained" value="unobtained" class="filter-radio">
                <label for="obtained" class="filter-div-labels">Unobtained only</label>
                <br>
                <br>
                <h3 class="filter-div-titles">Characters</h3>
                <input type="checkbox" id="allSelected" checked="true" value="all" onclick={selectAll} class="filter-checkbox">
                <label for="allSelected" class="filter-div-labels">Select All</label>
                <br>
                <br>
                <input type="checkbox" name="character-group" id="vs" value="Virtual Singer" checked="true" onchange={checkAllVS} class="filter-checkbox">
                <label for="vs">
                    <img src={vsLogo} alt="virtual singer logo" class="filter-label-group">
                </label>
                <div class="char-checkboxes char-checkboxes-vs">
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="miku" value="Hatsune Miku" checked="true">
                    <label for="miku">
                        <img src={miku} alt="hatsune miku" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="rin" value="Kagamine Rin" checked="true">
                    <label for="rin">
                        <img src={rin} alt="kagamine rin" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="len" value="Kagamine Len" checked="true">
                    <label for="len">
                        <img src={len} alt="kagamine len" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="luka" value="Megurine Luka" checked="true">
                    <label for="luka">
                        <img src={luka} alt="megurine luka" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="meiko" value="MEIKO" checked="true">
                    <label for="meiko">
                        <img src={meiko} alt="meiko" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="kaito" value="KAITO" checked="true">
                    <label for="kaito">
                        <img src={kaito} alt="kaito" class="filter-label-character">
                    </label>
                </div>
                <br>
                <br>
                <input type="checkbox" class="filter-checkbox" name="character-group" id="ln" value="Leo/need" onchange={checkAllLn} checked="true">
                <label for="ln">
                    <img src={lnLogo} alt="leo/need logo" class="filter-label-group">
                </label>
                <div class="char-checkboxes char-checkboxes-others">
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="ichika" value="Hoshino Ichika" checked="true">
                    <label for="ichika">
                        <img src={ichika} alt="ichika" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="saki" value="Tenma Saki" checked="true">
                    <label for="saki">
                        <img src={saki} alt="saki" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="honami" value="Mochizuki Honami" checked="true">
                    <label for="honami">
                        <img src={honami} alt="honami" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="shiho" value="Hinomori Shiho" checked="true">
                    <label for="shiho">
                        <img src={shiho} alt="shiho" class="filter-label-character">
                    </label>
                </div>
                <br>
                <br>
                <input type="checkbox" class="filter-checkbox" name="character-group" id="mmj" value="MORE MORE JUMP!" onchange={checkAllMMJ} checked="true">
                <label for="mmj">
                    <img src={mmjLogo} alt="more more jump logo" class="filter-label-group">
                </label>
                <div class="char-checkboxes char-checkboxes-others">
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="minori" value="Hanasato Minori" checked="true">
                    <label for="minori">
                        <img src={minori} alt="minori" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="haruka" value="Kiritani Haruka" checked="true">
                    <label for="haruka">
                        <img src={haruka} alt="haruka" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="airi" value="Momoi Airi" checked="true">
                    <label for="airi">
                        <img src={airi} alt="airi" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="shizuku" value="Hinomori Shizuku" checked="true">
                    <label for="shizuku">
                        <img src={shizuku} alt="shizuku" class="filter-label-character">
                    </label>
                </div>
                <br>
                <br>
                <input type="checkbox" class="filter-checkbox" name="character-group" id="vbs" value="Vivid Bad Squad"  onchange={checkAllVBS} checked="true">
                <label for="vbs">
                    <img src={vbsLogo} alt="vivid bad squad logo" class="filter-label-group">
                </label>
                <div class="char-checkboxes char-checkboxes-others">
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="kohane" value="Azusawa Kohane" checked="true">
                    <label for="kohane">
                        <img src={kohane} alt="kohane" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="an" value="Shiraishi An" checked="true">
                    <label for="an">
                        <img src={an} alt="an" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="akito" value="Shinonome Akito" checked="true">
                    <label for="akito">
                        <img src={akito} alt="akito" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="toya" value="Aoyagi Toya" checked="true">
                    <label for="toya">
                        <img src={toya} alt="toya" class="filter-label-character">
                    </label>
                </div>
                <br>
                <br>
                <input type="checkbox" class="filter-checkbox" name="character-group" id="wxs" value="Wonderlands X Showtime"  onchange={checkAllWxS} checked="true">
                <label for="wxs">
                    <img src={wxsLogo} alt="wonderlandsxshowtime logo" class="filter-label-group">
                </label>
                <div class="char-checkboxes char-checkboxes-others">
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="tsukasa" value="Tenma Tsukasa" checked="true">
                    <label for="tsukasa">
                        <img src={tsukasa} alt="tsukasa" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="emu" value="Otori Emu" checked="true">
                    <label for="emu">
                        <img src={emu} alt="emu" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="nene" value="Kusanagi Nene" checked="true">
                    <label for="nene">
                        <img src={nene} alt="nene" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="mybbg" value="Kamishiro Rui" checked="true">
                    <label for="mybbg">
                        <img src={bbg} alt="bbg" class="filter-label-character">
                    </label>
                </div>
                <br>
                <br>
                <input type="checkbox" class="filter-checkbox" name="character-group" id="n25" value="Nightcord at 25:00"  onchange={checkAllN25} checked="true">
                <label for="n25">
                    <img src={n25Logo} alt="nightcord at 25:00 logo" class="filter-label-group">
                </label>
                <div class="char-checkboxes char-checkboxes-others">
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="kanade" value="Yoisaki Kanade" checked="true">
                    <label for="kanade">
                        <img src={kanade} alt="kanade" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="mafuyu" value="Asahina Mafuyu" checked="true">
                    <label for="mafuyu">
                        <img src={mafuyu} alt="mafuyu" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="ena" value="Shinonome Ena" checked="true">
                    <label for="ena">
                        <img src={ena} alt="ena" class="filter-label-character">
                    </label>
                    <input type="checkbox" class="filter-checkbox" name="character-group" id="mizuki" value="Akiyama Mizuki" checked="true">
                    <label for="mizuki">
                        <img src={mizuki} alt="mizuki" class="filter-label-character">
                    </label>
                </div>
            </div>
            <div class="select-cancel">
                <button class="select-btn" onclick={selectFilter}>Select</button>
                <button class="select-btn" onclick={cancelFilter}>Cancel</button>
            </div>
        </div>
    </div>
    <div class="page pack-simulator" id="packSimulator">
        <div class="opening-options" id="openingOptions">
            <h1>Booster Pack Simulator</h1>
            <input type="radio" name="openUntil" id="manual" value="manual" checked="true" onclick={hideUIs}>
            <label for="manual">Manual</label>
            <br>
            <input type="radio" name="openUntil" id="quantityMet" value="quantityMet" onchange={quantityPickerUI}>
            <label for="quantityMet">Specific Quantity</label>
            <br>
            <div id="quantityPicker" style="display:none">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity">
                <input type="checkbox" id="skipOpening">
                <label for="skipOpening">Skip opening (show results only)</label>
                <br>
            </div>
            <input type="radio" name="openUntil" id="specificCard" value="specificCard" onclick={specificCardUI}>
            <label for="specificCard">Specific Card(s)</label>
            <div id="cardPickerContainer" class="card-picker-container">
                <input type="text" id="searchParam">
                <button onclick={searchCardPicker}>Search</button>
                <div id="cardPicker" class="card-picker grid">
                </div>
                <input type="checkbox" id="selectDeselectAll" onchange={selectDeselect}>
                <label for="selectDeselectAll">Select All Shown</label>
                <p>Open until...</p>
                <input type="radio" name="oneOrAll" id="one" value="one" checked=true>
                <label for="one">One obtained</label>
                <input type="radio" name="oneOrAll" id="all" value="all">
                <label for="all">All obtained</label>
                <input type="checkbox" id="skipOpening2">
                <label for="skipOpening2">Skip opening (show results only)</label>
            </div>
            <p>{errmsg}</p>
            <button onclick={simulate}>Simulate</button>
        </div>
        <br>
        <div class="manual-controls" id="manualControls">
            <button onclick={simulate}>Open Another</button>
            <button onclick={stopSimulate}>Stop</button>
            <h3>Pack count: {packCount}</h3>
        </div>
        <div class="auto-controls" id="autoControls">
            <button onclick={stopAuto}>Stop early</button>
        </div>
        <br>
        <div class="grid pulled-cards" id="pulledCards">
        </div>
        <div class="simulator-results" id="simulatorResults">
            <h1>Results</h1>
            <h3>Packs opened: {packCount}</h3>
            <div class="results-cards">
                <h3>SSP</h3>
                <div id="sspResults" class="grid"></div>
                <h3>RRR</h3>
                <div id="rrrResults" class="grid"></div>
                <h3>SR</h3>
                <div id="srResults" class="grid"></div>
                <h3>RR</h3>
                <div id="rrResults" class="grid"></div>
                <h3>R</h3>
                <div id="rResults" class="grid"></div>
                <h3>U</h3>
                <div id="uResults" class="grid"></div>
                <h3>CC</h3>
                <div id="ccResults" class="grid"></div>
                <h3>C</h3>
                <div id="cResults" class="grid"></div>
            </div>
            <button class="close-results" onclick={closeResults}>Close and Continue</button>
        </div>
    </div>
</div>

<style>
    @keyframes card-1{
        from{
            width: 18vw;
        }
        to{
            width: 19vw;
        }
    }

    @keyframes card-2{
        to{
            width: 18vw;
        }
        from{
            width: 19vw;
        }
    }

    :global(.card){
        width: 18vw;
        animation: card-2 0.5s ease-out;
    }

    :global(.card):hover{
        width: 19vw;
        animation: card-1 0.5s ease-out;
    }

    :global(.card-check){
        width: 10vw;
    }

    :global(.card-grayscale){
        filter: grayscale(100%);
    }

    @keyframes navbuttons-1{
        to{
            width: 21vw;
            height: 52px;
        }
        from{
            width: 20vw;
            height: 50px;
        }
    }

    @keyframes navbuttons-2{
        from{
            width: 21vw;
            height: 52px;
        }
        to{
            width: 20vw;
            height: 50px;
        }
    }

    .web-container{
        background-color: #EAF1FF;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }

    .navbar{
        width: 43vw;
        margin: auto;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        justify-content: space-around
    }

    .navbuttons{
        background-color: #F49D9D;
        border: white 2px solid;
        color: white;
        font-family: "Madimi One", sans-serif;
        font-size: 22px;
        width: 20vw;
        height: 50px;
        border-radius: 20px;
        animation: navbuttons-2 0.5s ease-out;
    }

    .navbuttons:hover{
        background-color: #f08a8a;
        height: 52px;
        width: 21vw;
        animation: navbuttons-1 0.5s ease-out;
    }

    .inventoryNav{
        width: 40vw;
        height: 45px;
        display: flex;
        justify-content: space-around;
    }

    .inventoryNavButtons{
        height: 100%;
        width: 35%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 23px;
        font-family: "Madimi One", sans-serif;
        font-weight: 500;
    }
    
    .cardsNav{
        background-color: #9ADAFF;
        z-index: 3;
        color: #2874D7;
    }

    .favoritesNav{
        background-color: #FF9A9C;
        position: relative;
        right: 0.5vw;
        z-index: 2;
        color: #D72851;
    }

    .wishlistNav{
        background-color: #FFE69A;
        position: relative;
        right: 1vw;
        z-index: 1;
        color: #D7A328;
    }

    .allCards{
        background-color: #AFD0F6;
        padding-top: 20px;
    }

    .favorites{
        background-color: #FFB9BA;
    }

    .wishlist{
        background-color: #FFEEBA;
    }

    @keyframes logo-1{
        from{
            width: 20vw;
        }
        to{
            width: 21vw;
        }
    }

    @keyframes logo-2{
        to{
            width: 20vw;
        }
        from{
            width: 21vw;
        }
    }

    .logo{
        width: 20vw;
        margin: auto;
        animation: logo-2 0.5s ease-out;
    }

    .logo:hover{
        width: 21vw;
        animation: logo-1 0.5s ease-out;
    }

    .filter-label-group{
        width: 12vw;
    }

    .filter-label-character{
        width: 5vw;
        height: 5vw;
        background-color: white;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
    }

    .filter-checkbox{
        accent-color: rgb(255, 111, 111);
        width: 20px;
        height: 20px;
    }

    .filter-radio{
        accent-color: rgb(255, 111, 111);
    }
    
    .char-checkboxes{
        display: flex;
        justify-content: space-around;
    }
    
    .char-checkboxes-vs{
        width: 80%;
    }

    .char-checkboxes-others{
        width: 60%;
    }

    .filter-div-titles{
        font-family: "Madimi One", sans-serif;
        font-size: 30px;
        text-align: center;
        color: rgb(44, 44, 79);
    }

    .filter-div-labels{
        font-family: "Madimi One", sans-serif;
        font-size: 18px;
        font-weight: 100;
        color: rgb(51, 51, 90);
    }

    .grid{
        display: grid;
        width: 100%;
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
        width: 90%;
        margin: auto;
        justify-content: space-between;
    }

    .filter-options{
        width: 60vw;
        height: 70vh;
        position: absolute;
        background-color: rgb(188, 230, 248);
        border-radius: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        box-sizing: border-box;
        padding: 18px;
        z-index: 5;
        border:rgb(255, 111, 111) 5px double;
    }

    .option-holder{
        height: 80%;
        overflow: auto;
    }

    .select-cancel{
        display: flex;
        width: 90%;
        margin: auto;
        position: sticky;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
        height: 20%;
    }

    @keyframes select-btn-1{
        from{
            width: 48%;
        }
        to{
            width: 50%;
        }
    }

    @keyframes select-btn-2{
        to{
            width: 48%;
        }
        from{
            width: 50%;
        }
    }

    .select-btn{
        width: 48%;
        border-radius: 20px;
        background-color: white;
        font-family: "Madimi One", sans-serif;
        font-size: 18px;
        animation: select-btn-2 0.5s ease-out;
    }

    .select-btn:hover{
        width: 50%;
        background-color: rgb(234, 234, 234);
        animation: select-btn-1 0.5s ease-out;
    }

    .page{
        height: 90vh;
    }

    .card-inventory{
        display: block;
    }

    .pack-simulator{
        display: none;
        overflow: auto;
        height: 90vh;
    }

    .manual-controls{
        display: none;
    }

    .simulator-results{
        width: 90vw;
        height: 90vh;
        background-color: rgb(214, 214, 252);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .close-results{
        position: fixed;
        bottom: 0;
    }

    .results-cards{
        height: 85%;
        overflow: auto;
    }

    .auto-controls{
        display: none;
    }

    .card-picker{
        background-color: rgb(247, 205, 212);
        height: 60vh;
        width: 60vw;
        padding: 3vw;
        row-gap: 3vw;
        overflow: auto;
    }

    .card-picker-container{
        display: none;
    }

    .pulled-cards{
        background: rgb(189, 209, 252);
    }
</style>
