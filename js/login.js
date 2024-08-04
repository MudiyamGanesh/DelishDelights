let password=document.getElementById("password");
let icon=document.getElementById("icon");
function clickon(){
    if(password.type == "password"){
        password.type = "text";
        icon.className="bx bx-show";
    }
    else{
       password.type = "password";
       icon.className="bx bx-hide";
    }
}
