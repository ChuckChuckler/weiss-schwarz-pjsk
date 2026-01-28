<script>
    import {signupLogic} from "./scripts/signin";
    import {loginLogic} from "./scripts/signin";
    import {goto} from "$app/navigation";

    import prskLogo from "$lib/assets/prsklogo.png";
    import wsLogo from "$lib/assets/wslogo.png";

    let tryMsgSignup = $state("");
    let tryMsgLogin = $state("");

    function sleep(ms){
        return new Promise(r=>setTimeout(r, ms));
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

    function pullUp(divId){
        document.getElementById(divId).style.display = "block";
    }
</script>

<div class="body">
    <div class="welcome">
        <div class="logos">
            <img src={prskLogo} alt="project sekai logo" class="prsk-logo"> 
            <img src={wsLogo} alt = "weiss schwarz logo" class="ws-logo">
        </div>
        <div class="signlog-btns">
            <button class="signup-login pull-signup" onclick={function(){pullUp("signUpDiv")}}>Sign Up</button>
            <button class="signup-login pull-login" onclick={function(){pullUp("loginDiv")}}>Log In</button>
        </div>
        <br>
        <br>
        <h3 class="info1">Online inventory + pack opening simulation</h3>
    </div>

    <div class="signup-login-div" id="signUpDiv">
        <h1 class="signup-login-title">Sign up</h1>
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
            <div class="half-flex"></div>
        </div>
    </div>

    <div class="signup-login-div" id="loginDiv">
        <h1>Log in</h1>
        <label for="loginuser">Username</label>
        <input type="text" id="loginuser" name="loginuser" placeholder="username" autocomplete="off">
        <br>
        <label for="loginpassword">Password</label>
        <input type="password" id="loginpassword" name="loginpassword" autocomplete="off" placeholder="password">
        <br>
        <button onclick={login}>Log in</button>
        <p id="errMsgLogin">{tryMsgLogin}</p>
    </div>
</div>

<style>
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

    .pull-login{
        background-color: white;
        border: #FE8093 4px solid;
        color: #FE8093;
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
</style>