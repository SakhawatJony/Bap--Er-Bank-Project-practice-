document.getElementById("btn-submit").addEventListener("click",function(){

    
    const emailFiled = document.getElementById("user-email");
    const userEmail = emailFiled.value;

    const passwprdFiled = document.getElementById("user-password");
    const userPassword = passwprdFiled.value;

    if(userEmail === "info@gmail.com" && userPassword === "secret"){
        console.log('valid user')


    }
    else{

        console.log('invalid user')
    }




})