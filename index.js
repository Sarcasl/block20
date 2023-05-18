const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
const addName = (event) =>{
const root = document.getElementById("root")
const ptag = document.createElement("p")
ptag.innerText = "click"
root.appendChild (ptag)
}


function main (){
const root = document.getElementById("root")
const p=document.createElement("h1")
h1.innerText = "FREELANCERS"
const ul = document.createElement("ul")
ul.innerText = `${users[0].name,age,occupation}`
}


const addName = (event) =>{
    const root = document.getElementById("root")
    const ptag = document.createElement("p")
    ptag.innerText = "click"
    root.appendChild (ptag)
    }                 



//call the main function
main();