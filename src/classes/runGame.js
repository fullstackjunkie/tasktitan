
import { createProjects, displayProjects } from "../createProject";
import { Projects } from "./projects";
export class RunGame {
    static runGame() {
        
        let projList = [];
        let projButton = document.querySelector("#proj__button");
        let taskButton = document.querySelector("#task__button"); 
        let displayProjectsButton = document.querySelector("#project-display__button");
        let subProjButton = document.querySelector(".inpButton");

        projButton.addEventListener("click", (e) => {
        
            // let newProj = new Projects();
            createProjects();
            
        })

        
        displayProjects();
            
        

        
    }

   

}