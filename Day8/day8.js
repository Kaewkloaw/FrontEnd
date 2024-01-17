// when you use id="function"
const submitButton = document.getElementById("submitButton");
//1
submitButton.addEventListener("click" , addContent);
//2
// <h1 oncilck="addContent()"></h1>
// when you use onclick="function()"
// console.log(document.getElementById("textInput").value);
// submitButton.addEventListener("click", addcontent);

function addContent() {
    console.log("IT's work")
    const text = document.getElementById("textInput").value;
    const result = document.getElementById("result")
    // const newDiv = document.createElement("div");
    // const newContent = document.createTextNode(text);
    // newDiv.appendChild(newContent);
    // const currentDiv = document.createElement("div");
    // document.body.appendChild(currentDiv);
    // document.body.insertBefore(newDiv, currentDiv);
    result.innerHTML = `<h1>${text}</h1>`;
}

const student = {
    name: "John",
    age: 25,
    city: "New York",
    parent: ["Somchai","Somying"]
}
// https://jsonplaceholder.typicode.com/

// API Endpoint
//Promise API = .then
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    console.log(data)
    const json = await data.json()
    console.log(json.length)

    const titleList = document.getElementById("titleList")
    for(let i=0; i<json.length; i++){
        titleList.innerHTML += `<h3>${json[i].title}</h3>`
    }
}
fetchData();
// synchonize process การทำงานแบบต่อเนื่อง

