let getButton = document.getElementById("button");

getButton.addEventListener("click",()=>{

//getting username's input value
let getUsername = document.getElementById("username")
let usernameValue = getUsername.value

//getting password's input value
let getPassword = document.getElementById("password")
let passwordValue = getPassword.value

//condition
if(usernameValue==="admin" && passwordValue==="admin123"){
   window.location.assign("./main.html")
}else{
    alert("NOOO")
    return;
}
})