

let mail;

document.querySelector("#button").addEventListener("click", function (){
    mail = document.querySelector("#email").value;
    console.log(mail);
    errorMessage();
})

function validity (mail){
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(mail);
}

function errorMessage (){
    if(validity(mail)){
         console.log("success");
         localStorage.setItem("email", mail);
         window.location.href = "success.html";
    }else if(mail === ""){
        document.querySelector(".error").innerText="Input Email Adress";
        console.log("error");
    }else {
        document.querySelector(".error").innerText="Valid email required";
    }
        
}