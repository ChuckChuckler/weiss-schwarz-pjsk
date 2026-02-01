import axios from "axios";

export async function loginLogic(username, password){
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

        let returnval = "";

        let userdata = await axios.post("/api/login", {
            user:username,
            pass:password
        })
        .then((response)=>{
            console.log(response.data.msg);
            returnval = response.data.msg;
        })
        .catch((e)=>{
            return(`Err: ${e}`);
        });

        return returnval;
    }
}

export async function signupLogic(username, password){
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
        
        let returnval = "";

        let userdata = await axios.post("/api/signup", {
            user:username,
            pass:password
        })
        .then((response)=>{
            console.log(response.data.msg);
            returnval = response.data.msg;
        })
        .catch((e)=>{
            return(`Err: ${e}`);
        });

        return returnval;
    }
}