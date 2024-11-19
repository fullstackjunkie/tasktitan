import { Projects } from "./classes/projects";
import "./style/projectStyles.css";
let projects = [];
export function createProjects() {
    
    let nProject;
    let container = document.querySelector(".container");
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
    let ul = document.createElement("ul");

    // let proj = JSON.parse(localStorage.getItem("projects"));

    projects.forEach((item) => {
        
        let li = document.createElement("li");
        li.innerText = item.title;
        ul.appendChild(li);
    }) 
    container.appendChild(ul);
}

