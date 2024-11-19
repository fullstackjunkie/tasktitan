import { Projects } from "./classes/projects";
import "./style/projectStyles.css";
let projects = [];
export function createProjects() {
    
    let nProject;
    let container = document.querySelector(".container");
    container.innerText = "";
    let form = document.createElement("form");
    let inputTitle = document.createElement("input");
    let label = document.createElement("label");
    let btn = document.createElement("button");
    label.innerText = "Title: ";
    btn.innerText = "Submit";
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "title");
    btn.classList.add("inpButton");
    inputTitle.classList.add("title__input");
    label.classList.add("label__title-input");
    form.appendChild(label);
    form.appendChild(inputTitle);
    form.appendChild(btn);
    container.appendChild(form);

    // return "text";

    document.querySelector(".inpButton").addEventListener("click", (e) => {
        e.preventDefault();
        nProject = new Projects();
        nProject.title = document.querySelector(".title__input").value;
        projects.push(nProject);
        localStorage.setItem("projects", JSON.stringify(projects));
    });


}





export function displayProjects() {
    let container = document.querySelector(".container");
    container.innerText = "";
    // let div = document.createElement("div");

    // let proj = JSON.parse(localStorage.getItem("projects"));

    projects.forEach((item) => {
        
        let div  = document.createElement("div");
        let btn = document.createElement("button");
        div.classList.add("card");
        item.todoList.push("a");
        div.innerText = item.title;
        btn.innerText = "ADD Tasks";
        div.appendChild(btn);
        container.appendChild(div);

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item);
        });
    }) 
    // container.appendChild(ul);
}

