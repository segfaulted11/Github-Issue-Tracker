//getting the essential elements 
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let content = document.getElementById("main-content");
let issueNumber = document.getElementById("issue")

//--------------------------------

//display "status = open+closed(all)" data (on default and the 'all' tab)-->

//fetch 
let loadAllData = ()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(response=>response.json())
    .then(json=>displayAll(json))
}
//display1 function 
let displayAll = (object)=>{
    let getArray = object.data

    content.innerHTML = "";
    let count = 0;

    getArray.forEach(eachObject => {

       // border based on status
       let borderClass = "";
        count++;

       if(eachObject.status ==="open"){
        borderClass = "border-t-4 border-green-500"; 
        }
        if(eachObject.status ==="closed"){
            borderClass = "border-t-4 border-purple-500"; 
        }

        // image based on priority
        let priorityImg = "";

        if(eachObject.priority === "high" || eachObject.priority === "medium"){
            priorityImg = `<img src="./img/Open-Status.png" class="size-8">`;
        }else{
            priorityImg = `<img src="./img/Closed- Status .png" class="size-8">`;
        }

        // create buttons for each label
        let labelButtons = eachObject.labels
            .map(label => `<button class="btn btn-primary mr-2">${label}</button>`)
            .join("");

        content.innerHTML +=  `
        <div class="bg-base-100 shadow p-3 h-85 rounded ${borderClass}">
        <div class="flex justify-between">
            ${priorityImg}
            <button class="btn bg-teal-300">${eachObject.priority}</button>
            </div>
            <h3 class="font-bold">${eachObject.title}</h3>
            <h3 class="font-bold opacity-75">${eachObject.description}</h3>
            ${labelButtons}
            <hr>
            <p>${eachObject.author}</p>
            <p>${new Date(eachObject.createdAt).toLocaleDateString()}</p>
        </div>
        `;
    });
    issueNumber.innerText = `${count} Issues`
}
//-------------------------------------

//default content
loadAllData();

//--------------------------------------

//display "status = open" data (on the 'open' tab)--->

// fetch
let loadOpenData = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(response => response.json())
    .then(json => {
      display2(json);
    });
}
//display2 function
let display2 = (object) => {
  let getArray = object.data;

   content.innerHTML = "";

    let count = 0;

  getArray.forEach(eachObject => {
    if(eachObject.status==="open"){
        
        count++;

        // create buttons for each label
        let labelButtons = eachObject.labels
            .map(label => `<button class="btn btn-primary mr-2">${label}</button>`)
            .join("");
        
        // image based on priority
        let priorityImg = "";

        if(eachObject.priority === "high" || eachObject.priority === "medium"){
            priorityImg = `<img src="./img/Open-Status.png" class="size-8">`;
        }else{
            priorityImg = `<img src="./img/Closed- Status .png" class="size-8">`;
        }

        content.innerHTML += `
        <div class="bg-base-100 shadow p-3 h-85 rounded border-t-4 border-green-500">
        <div class="flex justify-between">
            ${priorityImg}
            <button class="btn bg-teal-300">${eachObject.priority}</button>
            </div>
            <h3 class="font-bold">${eachObject.title}</h3>
            <h3 class="font-bold opacity-75">${eachObject.description}</h3>
            ${labelButtons}
            <hr>
            <p>${eachObject.author}</p>
            <p>${new Date(eachObject.createdAt).toLocaleDateString()}</p>
        </div>
        `
    }
  });
    issueNumber.innerText = `${count} Issues`
}

// ---------------------------------------


//display "status = closed" data (on the 'closed' tab)--->

// fetch
let loadClosedData = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(response => response.json())
    .then(json => {
      display3(json);
    });
}
//display3 function
let display3 = (object) => {
  let getArray = object.data;

   content.innerHTML = "";
    let count = 0;

  getArray.forEach(eachObject => {
    if(eachObject.status==="closed"){

        count++;
        
        // create buttons for each label
        let labelButtons = eachObject.labels
            .map(label => `<button class="btn btn-primary mr-2">${label}</button>`)
            .join("");
        
        // image based on priority
        let priorityImg = "";

        if(eachObject.priority === "high" || eachObject.priority === "medium"){
            priorityImg = `<img src="./img/Open-Status.png" class="size-8">`;
        }else{
            priorityImg = `<img src="./img/Closed- Status .png" class="size-8">`;
        }

        content.innerHTML += `
        <div class="bg-base-100 shadow p-3 h-85 rounded border-t-4 border-green-500">
        <div class="flex justify-between">
            ${priorityImg}
            <button class="btn bg-teal-300">${eachObject.priority}</button>
            </div>
            <h3 class="font-bold">${eachObject.title}</h3>
            <h3 class="font-bold opacity-75">${eachObject.description}</h3>
            ${labelButtons}
            <hr>
            <p>${eachObject.author}</p>
            <p>${new Date(eachObject.createdAt).toLocaleDateString()}</p>
        </div>
        `
    }
  });
    issueNumber.innerText = `${count} Issues`
}
// ------------------------------------------

// default selected button
btn1.classList.add("btn-primary");

btn1.addEventListener("click", function () {

    btn1.classList.add("btn-primary");
    btn2.classList.remove("btn-primary");
    btn3.classList.remove("btn-primary");

    loadAllData();
});

btn2.addEventListener("click", function () {
    
    btn2.classList.add("btn-primary");
    btn1.classList.remove("btn-primary");
    btn3.classList.remove("btn-primary");

    loadOpenData();
});

btn3.addEventListener("click", function () {
    content.textContent = "Closed BUTTON";

    btn3.classList.add("btn-primary");
    btn1.classList.remove("btn-primary");
    btn2.classList.remove("btn-primary");

    loadClosedData();
});