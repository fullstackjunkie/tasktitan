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
       
        let dValue = document.querySelector(".title__input");
        
        nProject = new Projects();
        nProject.title = dValue.value;
        console.log("IM IN");
        dValue.value = "";
        projects.push(nProject);
        localStorage.setItem("projects", JSON.stringify(projects));
        displayProjects();
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
        let delBtn = document.createElement("button");
        let h2 = document.createElement("h2");
        let ul = document.createElement("ul");
        div.classList.add("card");
        
        h2.innerText = item.title;
        btn.innerText = "ADD TASKS";
        delBtn.innerText = "x";
        delBtn.classList.add("del__button");
        div.appendChild(h2);
        div.appendChild(btn);
        div.appendChild(delBtn);
        container.appendChild(div);
        div.appendChild(ul);

        delBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
        });
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            addTaskForm();
            let inVal = document.querySelector(".inVal");
            let subBtn = document.querySelector(".submit");
            
            div.appendChild(ul);
            subBtn.addEventListener("click", (e)=> {
                e.preventDefault();
                item.todoList.push(inVal.value);
                ul.innerText = "";
                item.todoList.forEach((task) => {
                    
                    let li = document.createElement("li");
                    li.innerText = task;
                    ul.appendChild(li);
                });
                displayProjects();
            });
            
        });

        item.todoList.forEach((task) => {
                    
            let li = document.createElement("li");
            li.innerText = task;
            ul.appendChild(li);
        });
    }) 
    // container.appendChild(ul);
}

function addTaskForm() {
    let cardDiv = document.querySelector(".card");
    let btn = document.createElement("button");
    let form = document.createElement("form");
    let inputTitle = document.createElement("input");
    inputTitle.classList.add("inVal");
    let label = document.createElement("label");
    label.innerText = "add task";
    btn.classList.add("submit");
    btn.innerText = "Submit";


    cardDiv.appendChild(form);
    form.appendChild(label);
    form.appendChild(inputTitle);
    form.appendChild(btn);
}


displayProjects();
