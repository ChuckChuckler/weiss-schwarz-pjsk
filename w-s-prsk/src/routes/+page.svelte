<script>
    import {signupLogic} from "./scripts/signin";
    import {loginLogic} from "./scripts/signin";

    let tryMsgSignup = $state("");
    let tryMsgLogin = $state("");

    async function signup(){
        tryMsgSignup = await signupLogic(document.getElementById("signupuser").value, document.getElementById("signuppassword").value);
    }

    async function login(){
        tryMsgLogin = await loginLogic(document.getElementById("loginuser").value, document.getElementById("loginpassword").value);
    }
</script>

<h1>Sign up</h1>
<label for="signupuser">Username</label>
<input type="text" id="signupuser" name="signupuser" placeholder="username" autocomplete="off">
<br>
<label for="signuppassword">Password</label>
<input type="password" id="signuppassword" name="signuppassword" autocomplete="off" placeholder="password">
<br>
<button onclick={signup}>Sign up</button>
<p id="errMsgSignup">{tryMsgSignup}</p>
<br>
<br>
<h1>Log in</h1>
<label for="loginuser">Username</label>
<input type="text" id="loginuser" name="loginuser" placeholder="username" autocomplete="off">
<br>
<label for="loginpassword">Password</label>
<input type="password" id="loginpassword" name="loginpassword" autocomplete="off" placeholder="password">
<br>
<button onclick={login}>Log in</button>
<p id="errMsgLogin">{tryMsgLogin}</p>