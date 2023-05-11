document.getElementById("btn-submit").addEventListener("click",function(){

    
    const emailFiled = document.getElementById("user-email");
    const userEmail = emailFiled.value;

    const passwprdFiled = document.getElementById("user-password");
    const userPassword = passwprdFiled.value;

    if(userEmail === "info@gmail.com" && userPassword === "secret"){
       window.location.href = "bank.html"


    }
    else{

       alert('sorry try agin You are invalid user')
    }




})