<script>
    import axios from "axios";
    import {onMount} from "svelte";
    import {cards} from "./../scripts/cardData"; 

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

    function createCard(cardId, sendToLink, addToInventory){
        let img = document.createElement("img");
        img.src=cards[cardId].photo;
        img.alt=cards[cardId].name;
        img.classList.add("card");
        if(sendToLink){
            img.onclick = function(){
                let url = new URL(window.location.href.replace("/home", "/card"));
                url.searchParams.set("id", cardId);
                window.open(url, "_blank");
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
            let img = createCard(i, true, true);
            
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
                    let img = createCard(i, true, true);
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
                    let img = createCard(i, true, true);
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
                    let img = createCard(i, true, true);
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
                let img = createCard(i, false, false);
                document.querySelector("img[name='cardCover']").replaceWith(img);
            });
        }else{
            cardsOpened.forEach(i => {
                let img = createCard(i, false, false);
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
                document.getElementById("sspResults").appendChild(createCard(SSPs[chosenIndex], true, false));
            }
            return SSPs[chosenIndex];
        }else if(cardChosen<7 && rrrCount!=4){ //RRR
            rrrCount+=1;
            let chosenIndex = randint(RRRs.length);
            if(!rrrObtained.includes(RRRs[chosenIndex])){
                rrrObtained.push(RRRs[chosenIndex]);
                document.getElementById("rrrResults").appendChild(createCard(RRRs[chosenIndex], true, false));
            }
            return RRRs[chosenIndex];
        }else if(cardChosen<17 && srCount!=10){ //SR
            srCount+=1;
            let chosenIndex = randint(SRs.length);
            if(!srObtained.includes(SRs[chosenIndex])){
                srObtained.push(SRs[chosenIndex]);
                document.getElementById("srResults").appendChild(createCard(SRs[chosenIndex], true, false));
            }
            return SRs[randint(SRs.length)];
        }else if(cardChosen<113){ //RR
            let chosenIndex = randint(RRs.length);
            if(!rrObtained.includes(RRs[chosenIndex])){
                rrObtained.push(RRs[chosenIndex]);
                document.getElementById("rrResults").appendChild(createCard(RRs[chosenIndex], true, false));
            }
            return RRs[chosenIndex];
        }else if(cardChosen<473){ //R
            let chosenIndex = randint(Rs.length);
            if(!rObtained.includes(Rs[chosenIndex])){
                rObtained.push(Rs[chosenIndex]);
                document.getElementById("rResults").appendChild(createCard(Rs[chosenIndex], true, false));
            }
            return Rs[chosenIndex];
        }else if(cardChosen<1049){ //U
            let chosenIndex = randint(Us.length);
            if(!uObtained.includes(Us[chosenIndex])){
                uObtained.push(Us[chosenIndex]);
                document.getElementById("uResults").appendChild(createCard(Us[chosenIndex], true, false));
            }
            return Us[chosenIndex];
        }else if(cardChosen<2201){ //C
            let chosenIndex = randint(Cs.length);
            if(!cObtained.includes(Cs[chosenIndex])){
                cObtained.push(Cs[chosenIndex]);
                document.getElementById("cResults").appendChild(createCard(Cs[chosenIndex], true, false));
            }
            return Cs[chosenIndex];
        }else{ //CC
            let chosenIndex = randint(CCs.length);
            if(!ccObtained.includes(CCs[chosenIndex])){
                ccObtained.push(CCs[chosenIndex]);
                document.getElementById("ccResults").appendChild(createCard(CCs[chosenIndex], true, false));
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
        <button onclick={showInventory}>Inventory</button>
        <button onclick={showSimulator}>Pack Simulator</button>
    </div>
    <div class="page card-inventory" id="cardInventory">
        <div class="nav-flex">
            <div>
                <button onclick={cardsDisplay}>Cards</button>
                <button onclick={favoritesDisplay}>Favorites</button>
                <button onclick={wishlistDisplay}>Wishlist</button>
            </div>
            <div>
                <button onclick={toggleFilter} class="nav-flex">Filter</button>
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
            <div class="option-holder">
                <h3>Status</h3>
                <input type="radio" name="obtained-or-not" id="all" value="all" checked="true">
                <label for="all">All</label>
                <br>
                <input type="radio" name="obtained-or-not" id="obtained" value="obtained">
                <label for="obtained">Obtained only</label>
                <br>
                <input type="radio" name="obtained-or-not" id="unobtained" value="unobtained">
                <label for="obtained">Unobtained only</label>
                <br>
                <br>
                <h3>Characters</h3>
                <input type="checkbox" id="allSelected" checked="true" value="all" onclick={selectAll}>
                <label for="allSelected">Select All</label>
                <br>
                <br>
                <input type="checkbox" name="character-group" id="vs" value="Virtual Singer" checked="true" onchange={checkAllVS}>
                <label for="vs">Virtual Singer</label>
                <input type="checkbox" name="character-group" id="miku" value="Hatsune Miku" checked="true">
                <label for="miku">Hatsune Miku</label>
                <input type="checkbox" name="character-group" id="rin" value="Kagamine Rin" checked="true">
                <label for="rin">Kagamine Rin</label>
                <input type="checkbox" name="character-group" id="len" value="Kagamine Len" checked="true">
                <label for="len">Kagamine Len</label>
                <input type="checkbox" name="character-group" id="luka" value="Megurine Luka" checked="true">
                <label for="luka">Megurine Luka</label>
                <input type="checkbox" name="character-group" id="meiko" value="MEIKO" checked="true">
                <label for="meiko">MEIKO</label>
                <input type="checkbox" name="character-group" id="kaito" value="KAITO" checked="true">
                <label for="kaito">KAITO</label>
                <br>
                <br>
                <input type="checkbox" name="character-group" id="ln" value="Leo/need" onchange={checkAllLn} checked="true">
                <label for="ln">Leo/need</label>
                <input type="checkbox" name="character-group" id="ichika" value="Hoshino Ichika" checked="true">
                <label for="ichika">Hoshino Ichika</label>
                <input type="checkbox" name="character-group" id="saki" value="Tenma Saki" checked="true">
                <label for="saki">Tenma Saki</label>
                <input type="checkbox" name="character-group" id="honami" value="Mochizuki Honami" checked="true">
                <label for="honami">Mochizuki Honami</label>
                <input type="checkbox" name="character-group" id="shiho" value="Hinomori Shiho" checked="true">
                <label for="shiho">Hinomori Shiho</label>
                <br>
                <br>
                <input type="checkbox" name="character-group" id="mmj" value="MORE MORE JUMP!" onchange={checkAllMMJ} checked="true">
                <label for="mmj">MORE MORE JUMP!</label>
                <input type="checkbox" name="character-group" id="minori" value="Hanasato Minori" checked="true">
                <label for="ichika">Hanasato Minori</label>
                <input type="checkbox" name="character-group" id="haruka" value="Kiritani Haruka" checked="true">
                <label for="haruka">Kiritani Haruka</label>
                <input type="checkbox" name="character-group" id="airi" value="Momoi Airi" checked="true">
                <label for="airi">Momoi Airi</label>
                <input type="checkbox" name="character-group" id="shizuku" value="Hinomori Shizuku" checked="true">
                <label for="shizuku">Hinomori Shizuku</label>
                <br>
                <br>
                <input type="checkbox" name="character-group" id="vbs" value="Vivid Bad Squad"  onchange={checkAllVBS} checked="true">
                <label for="vbs">Vivid Bad Squad</label>
                <input type="checkbox" name="character-group" id="kohane" value="Azusawa Kohane" checked="true">
                <label for="kohane">Azusawa Kohane</label>
                <input type="checkbox" name="character-group" id="an" value="Shiraishi An" checked="true">
                <label for="an">Shiraishi An</label>
                <input type="checkbox" name="character-group" id="akito" value="Shinonome Akito" checked="true">
                <label for="akito">Shinonome Akito</label>
                <input type="checkbox" name="character-group" id="toya" value="Aoyagi Toya" checked="true">
                <label for="toya">Aoyagi Toya</label>
                <br>
                <br>
                <input type="checkbox" name="character-group" id="wxs" value="Wonderlands X Showtime"  onchange={checkAllWxS} checked="true">
                <label for="wxs">Wonderlands X Showtime</label>
                <input type="checkbox" name="character-group" id="tsukasa" value="Tenma Tsukasa" checked="true">
                <label for="tsukasa">Tenma Tsukasa</label>
                <input type="checkbox" name="character-group" id="emu" value="Otori Emu" checked="true">
                <label for="emu">Otori Emu</label>
                <input type="checkbox" name="character-group" id="nene" value="Kusanagi Nene" checked="true">
                <label for="nene">Kusanagi Nene</label>
                <input type="checkbox" name="character-group" id="mybbg" value="Kamishiro Rui" checked="true">
                <label for="mybbg">Kamishiro Rui</label>
                <br>
                <br>
                <input type="checkbox" name="character-group" id="n25" value="Nightcord at 25:00"  onchange={checkAllN25} checked="true">
                <label for="n25">Nightcord at 25:00</label>
                <input type="checkbox" name="character-group" id="kanade" value="Yoisaki Kanade" checked="true">
                <label for="kanade">Yoisaki Kanade</label>
                <input type="checkbox" name="character-group" id="mafuyu" value="Asahina Mafuyu" checked="true">
                <label for="mafuyu">Asahina Mafuyu</label>
                <input type="checkbox" name="character-group" id="ena" value="Shinonome Ena" checked="true">
                <label for="ena">Shinonome Ena</label>
                <input type="checkbox" name="character-group" id="mizuki" value="Akiyama Mizuki" checked="true">
                <label for="mizuki">Akiyama Mizuki</label>
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
        <div class="grid" id="pulledCards">
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
    :global(.card){
        width: 18vw;
    }

    :global(.card-check){
        width: 10vw;
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

    .option-holder{
        height: 80%;
        overflow: auto;
    }

    .select-cancel{
        display: flex;
        width: 90%;
        position: sticky;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
        height: 15%;
    }

    .select-btn{
        width: 48%;
        background-color: white;
    }

    .page{
        height: 90vh;
    }

    .card-inventory{
        display: none;
    }

    .pack-simulator{
        display: block;
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
</style>
