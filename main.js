//getting the essential elements 
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let content = document.getElementById("main-content");


//fetch 
let loadData = ()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(response=>response.json())
    .then(json=>display(json))
}
let display = (object)=>{
    let getArray = object.data

    getArray.forEach(eachObject => {

    content.innerHTML += `title - ${eachObject.title}`

    });
}


// default selected button
btn1.classList.add("btn-primary");

//default content
content.textContent = loadData()

btn1.addEventListener("click", function () {
    content.textContent = "ALL BUTTON";

    btn1.classList.add("btn-primary");
    btn2.classList.remove("btn-primary");
    btn3.classList.remove("btn-primary");

});

btn2.addEventListener("click", function () {
    content.textContent = "Open BUTTON";

    btn2.classList.add("btn-primary");
    btn1.classList.remove("btn-primary");
    btn3.classList.remove("btn-primary");
});

btn3.addEventListener("click", function () {
    content.textContent = "Closed BUTTON";

    btn3.classList.add("btn-primary");
    btn1.classList.remove("btn-primary");
    btn2.classList.remove("btn-primary");
});