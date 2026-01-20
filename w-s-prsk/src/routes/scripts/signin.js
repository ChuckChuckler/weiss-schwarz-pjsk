import axios from "axios";

export function loginLogic(username, password){
    if(username==""){
        return "No username provided";
    }else if(password==""){
        return "No password provided";
    }else{
        if(username.length<3 || username.length>15){
            return "Username must be between 3-15 characters.";
        }else if(password.length<5){
            return "Password must be at least 5 characters.";
        }

        let returnvalue = "";

        axios.post("/signup", {
            user:username,
            pass:password
        })
        .then((response)=>{
            console.log(response.data.msg);
            returnvalue = "hi";
        })
        .catch((e)=>{
            console.log("E: " + e);
            returnvalue = e;
        });

        return returnvalue;
    }
}

export function signupLogic(username, password){
    if(username==""){
        return "No username provided";
    }else if(password==""){
        return "No password provided";
    }else{
        if(username.length < 3 || username.length > 15){
            return "Username must be between 3-15 characters.";
        }else if(password.length<5){
            return "Password must be at least 5 characters.";
        }
        return "Success!";
    }
}