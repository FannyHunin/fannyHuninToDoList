let tasks;
var tasksEditBtn;
let input;
let inputBtn;

listBody.addEventListener("click", (e) => {
    if (e.target.innerText == "Edit") {
        console.log("editing")
        tasks = e.target.parentElement.parentElement
        tasksEditBtn = e.target.parentElement
        tasks.innerText = ""
        tasksEditBtn.setAttribute("class","d-none");
        // tasksEditBtn.style.display = "none"
        input = tasks.appendChild(document.createElement("input"));
        input.setAttribute("id", "editInput")
        inputBtn = tasks.appendChild(document.createElement("button"));
        inputBtn.setAttribute("id", "editBtn");
        inputBtn.innerText = "Save";
    }else if(e.target.innerText == "Save"){
        if(input.value == ""){
            console.log("oops")
        }else{
            tasksEditBtn.classList.remove("d-none")
            console.log(tasksEditBtn);
            input.toggleAttribute("hidden");
            inputBtn.toggleAttribute("hidden");
            tasks.innerText = input.value
            // je remets le display
            tasksEditBtn.setAttribute("class","");
            //et je remets dans l'html
            tasks.append(tasksEditBtn);
        }
    }
})