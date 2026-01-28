<script>
    import {signupLogic} from "./scripts/signin";
    import {loginLogic} from "./scripts/signin";
    import {goto} from "$app/navigation";

    import stars from "$lib/assets/seamlessStars.png";

    import prskLogo from "$lib/assets/prsklogo.png";
    import wsLogo from "$lib/assets/wslogo.png";

    import miku from "$lib/assets/miku.png";
    import rin from "$lib/assets/rin.png";
    import len from "$lib/assets/len.png";
    import luka from "$lib/assets/luka.png";
    import meiko from "$lib/assets/meiko.png";
    import kaito from "$lib/assets/kaito.png";
    import ichika from "$lib/assets/ichika.png";
    import saki from "$lib/assets/saki.png";
    import honami from "$lib/assets/honami.png";
    import shiho from "$lib/assets/shiho.png";
    import minori from "$lib/assets/minori.png";
    import haruka from "$lib/assets/haruka.png";
    import airi from "$lib/assets/airi.png";
    import shizuku from "$lib/assets/shizuku.png";
    import kohane from "$lib/assets/kohane.png";
    import an from "$lib/assets/an.png";
    import akito from "$lib/assets/akito.png";
    import toya from "$lib/assets/toya.png";
    import emu from "$lib/assets/emu.png";
    import nene from "$lib/assets/nene.png";
    import bbg from "$lib/assets/rui.png";
    import kanade from "$lib/assets/kanade.png";
    import mafuyu from "$lib/assets/mafuyu.png";
    import ena from "$lib/assets/ena.png";
    import mizuki from "$lib/assets/mizuki.png";

    let imgs = [miku, rin, len, luka, meiko, kaito, ichika, saki, honami, shiho, minori, haruka, airi, shizuku, kohane, an, akito, toya, emu, nene, bbg, kanade, mafuyu, ena, mizuki];

    let tryMsgSignup = $state("");
    let tryMsgLogin = $state("");

    let signupImg = $state(miku);
    let loginImg = $state(miku);

    function sleep(ms){
        return new Promise(r=>setTimeout(r, ms));
    }

    function randint(max){
        return Math.floor(Math.random()*(max));
    }

    async function signup(){
        tryMsgSignup = await signupLogic(document.getElementById("signupuser").value, document.getElementById("signuppassword").value);
        if(tryMsgSignup=="Success! Loading..."){
            await sleep(2000);
            goto("/home");
        }
    }

    async function login(){
        tryMsgLogin = await loginLogic(document.getElementById("loginuser").value, document.getElementById("loginpassword").value);
        if(tryMsgLogin=="Success! Loading..."){
            await sleep(2000);
            goto("/home");
        }
    }

    function pullUp(divId, imgId){
        document.getElementById(divId).style.display = "block";
        document.getElementById("signupChar").src = imgs[randint(imgs.length)];
        document.getElementById("loginChar").src = imgs[randint(imgs.length)];
    }

    function closeDivs(){
        document.getElementById("signUpDiv").style.display = "none";
        document.getElementById("loginDiv").style.display = "none";
    }
</script>

<div class="falling-stars"></div>
<div class="body">
    <div class="welcome">
        <div class="logos">
            <img src={prskLogo} alt="project sekai logo" class="prsk-logo"> 
            <img src={wsLogo} alt = "weiss schwarz logo" class="ws-logo">
        </div>
        <div class="signlog-btns">
            <button class="signup-login pull-signup" onclick={function(){pullUp("signUpDiv", "signupChar")}}>Sign Up</button>
            <button class="signup-login pull-login" onclick={function(){pullUp("loginDiv")}}>Log In</button>
        </div>
        <br>
        <br>
        <h3 class="info1">Online inventory + pack opening simulation</h3>
    </div>

    <div class="signup-login-div" id="signUpDiv">
        <button class="x-button" onclick={closeDivs}>X</button>
        <h1 class="signup-login-title">Sign Up</h1>
        <div class="signup-login-flex">
            <div class="half-flex">
                <label for="signupuser" class="signup-labels">Username</label>
                <br>
                <input type="text" id="signupuser" name="signupuser" placeholder="3-15 Characters" autocomplete="off" class="signup-inputs">
                <br>
                <br>
                <label for="signuppassword" class="signup-labels">Password</label>
                <br>
                <input type="password" id="signuppassword" name="signuppassword" autocomplete="off" placeholder="8+ Characters" class="signup-inputs">
                <br>
                <br>
                <p id="errMsgSignup">{tryMsgSignup}</p>
                <br>
                <button onclick={signup} class="signup-buttons">Create Account</button>
            </div>
            <div class="half-flex">
                <img src={signupImg} alt="cool character" id="signupChar" class="signup-char">
            </div>
        </div>
    </div>

    <div class="signup-login-div" id="loginDiv">
        <button class="x-button" onclick={closeDivs}>X</button>
        <h1 class="signup-login-title">Log In</h1>
        <div class="signup-login-flex">
            <div class="half-flex">
                <label for="loginuser" class="signup-labels">Username</label>
                <br>
                <input type="text" id="loginuser" name="loginuser" placeholder="3-15 Characters" autocomplete="off" class="signup-inputs">
                <br>
                <br>
                <label for="loginpassword" class="signup-labels">Password</label>
                <br>
                <input type="password" id="loginpassword" name="loginpassword" autocomplete="off" placeholder="8+ Characters" class="signup-inputs">
                <br>
                <br>
                <p id="errMsgLogin">{tryMsgLogin}</p>
                <br>
                <button onclick={login} class="signup-buttons">Log In</button>
            </div>
            <div class="half-flex">
                <img src={signupImg} alt="cool character" id="loginChar" class="signup-char">
            </div>
        </div>
    </div>
</div>

<style>
    @keyframes slide{
        from{background-position-x: 0px; background-position-y: 0px;}
        to{background-position-x: -500px; background-position-y: -300px;}
    }

    @keyframes button-1{
        from{
            width: 40%;
            height: 125px;
        }
        to{
            width: 42%;
            height: 130px;
        }
    }

    @keyframes button-2{
        to{
            width: 40%;
            height: 125px;
        }
        from{
            width: 42%;
            height: 130px;
        }
    }

    @keyframes prsk-logo-1{
        from{
            width: 525px;
        }
        to{
            width: 545px;
        }
    }

    @keyframes prsk-logo-2{
        to{
            width: 525px;
        }
        from{
            width: 545px;
        }
    }

    @keyframes ws-logo-1{
        from{
            width: 400px;
        }
        to{
            width: 420px;
        }
    }

    @keyframes ws-logo-2{
        to{
            width: 400px;
        }
        from{
            width: 420px;
        }
    }

    @keyframes info1-1{
        from{
            font-size: 30px;
        }
        to{
            font-size: 32px;
        }
    }

    @keyframes info1-2{
        to{
            font-size: 30px;
        }
        from{
            font-size: 32px;
        }
    }

    @keyframes signup-buttons-1{
        to{
            width: 87%;
            height: 12vh;
        }

        from{
            width: 85%;
            height: 10vh;
        }
    }

    @keyframes signup-inputs-1{
        from{
            width: 90%;
            height: 9vh;
        }

        to{
            width: 92%;
            height: 9.5vh;
        }
    }

    @keyframes signup-inputs-2{
        to{
            width: 90%;
            height: 9vh;
        }

        from{
            width: 92%;
            height: 9.5vh;
        }
    }

    @keyframes signup-buttons-2{
        from{
            width: 87%;
            height: 12vh;
        }

        to{
            width: 85%;
            height: 10vh;
        }
    }

    .falling-stars{
        background-image: url("$lib/assets/seamlessStars.png");
        background-size: 800px;
        background-repeat: repeat;
        background-blend-mode: lighten;
        position: absolute;
        width: 100vw;
        height: 100vh;
        animation: slide 15s linear infinite;
        opacity: 0.3;
    }

    .body{
        background-image: linear-gradient(to bottom, #E9FEFF, #9bdffe);
        width: 100vw;
        height: 100vh;
    }

    .welcome{
        position: relative;
    }

    .logos{
        position: relative;
        top: 30px;
    }

    .prsk-logo{
        width: 525px;
        margin: auto;
        animation: prsk-logo-2 0.5s ease-out;
    }

    .prsk-logo:hover{
        width: 545px;
        animation: prsk-logo-1 0.5s ease-out;
    }

    .ws-logo{
        width: 400px;
        position: relative;
        bottom: 30px;
        margin: auto;
        animation: ws-logo-2 0.5s ease-out;
    }

    .ws-logo:hover{
        width: 420px;
        animation: ws-logo-1 0.5s ease-out;
    }

    .signlog-btns{
        width: 70vw;
        display: flex;
        justify-content: space-around;
        margin: auto;
        margin-top: 30px;
    }

    .signup-login{
        width: 40%;
        height: 125px;
        border-radius: 25px;
        font-size: 30px;
        font-weight: 200;
        font-family: "Madimi One", sans-serif;
        animation: button-2 0.5s ease-out;
    }

    .signup-login:hover{
        width: 42%;
        height: 130px;
        animation: button-1 0.5s ease-out;
    }

    .pull-signup{
        background-color: #FE8093;
        color: white;
        border: white 4px solid;
    }

    .pull-signup:hover{
        background-color: #e77283;
    }

    .pull-login{
        background-color: white;
        border: #FE8093 4px solid;
        color: #FE8093;
    }

    .pull-login:hover{
        background-color: #eeeeee;
    }

    .info1{
        font-family: "Madimi One", sans-serif;
        font-weight: 400;
        color: #3D365F;
        font-size: 30px;
        text-align: center;
        user-select: none;
        animation: info1-2 0.5s ease-out;
    }

    .info1:hover{
        font-size: 32px;
        animation: info1-1 0.5s ease-out;
    }

    .x-button{
        position: absolute;
        color: white;
        font-size: 30px;
        width: 5%;
        text-align: center;
        font-family: "Madimi One", sans-serif;
        font-weight: 500;
        background-color: #FE8093;
    }

    .x-button:hover{
        background-color: #e77283;
    }

    .signup-login-div{
        display: none;
        width: 85vw;
        height: 85vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFB4BA;
        border-radius: 35px;
        box-sizing: border-box;
        padding: 30px;
    }

    .signup-login-title{
        text-align: center;
        font-size: 40px;
        font-family: "Madimi One", sans-serif;
        color: #3D365F;
        text-decoration: underline;
        font-weight: 500;
    }    

    .signup-login-flex{
        width: 90%;
        margin: auto;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        justify-content: space-around;
    }

    .half-flex{
        width: 49%;
        margin: auto;
        position: relative;
    }

    .signup-labels{
        font-size: 25px;
        font-family: "Madimi One", sans-serif;
        font-weight: 400;
        color: #15131f;
    }

    .signup-inputs{
        background-color: white;
        border-radius: 15px;
        height: 9vh;
        width: 90%;
        padding: 10px;
        animation: signup-inputs-2 0.5s ease-out;
    }

    .signup-inputs:hover{
        height: 9.5vh;
        width: 92%;
        animation: signup-inputs-1 0.5s ease-out;
    }

    .signup-buttons{
        width: 85%;
        background-color: #FFEDB7;
        color: #F5C229;
        height: 10vh;
        border-radius: 20px;
        font-size: 25px;
        font-weight: 500;
        font-family: "Madimi One", sans-serif;
        animation: signup-buttons-2 0.5s ease-out;
    }

    .signup-buttons:hover{
        background-color: #ffe69b;
        height: 12vh;
        width: 87%;
        animation: signup-buttons-1 0.5s ease-out;
    }

    .signup-char{
        height: 60vh;
        width: 50vw;
        object-fit: cover;
        object-position: top;
    }
</style>