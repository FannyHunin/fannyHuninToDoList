let tasks;
var tasksEditBtn;
let input;
let inputBtn;
let abortBtn;

listBody.addEventListener("click", (e) => {
    if (e.target.innerText == "Edit") {
        tasks = e.target.parentElement.parentElement
        tasksEditBtn = e.target.parentElement
        tasks.innerText = ""
        tasksEditBtn.setAttribute("class", "d-none");
        input = tasks.appendChild(document.createElement("input"));
        input.setAttribute("id", "editInput")
        inputBtn = tasks.appendChild(document.createElement("button"));
        abortBtn = tasks.appendChild(document.createElement("button"));
        inputBtn.setAttribute("class", "editBtn");
        abortBtn.setAttribute("class", "editBtn");
        inputBtn.innerText = "Save";
        abortBtn.innerText = "Back";
    } else if (e.target.innerText == "Save") {
        if (input.value == "") {
            alert("Please, enter some text");
        } else {
            tasksEditBtn.classList.remove("d-none")
            input.toggleAttribute("hidden");
            inputBtn.toggleAttribute("hidden");
            tasks.innerText = input.value
            // je remets le display
            tasksEditBtn.setAttribute("class", "");
            //et je remets dans l'html
            tasks.append(tasksEditBtn);
        }
    } /*else if (e.target.innerText == "Back") {
        tasks.append(tasksEditBtn);
        tasksEditBtn.classList.remove("d-none")
        input.toggleAttribute("hidden");
        inputBtn.toggleAttribute("hidden");
        abortBtn.toggleAttribute("hidden");
        tasks.innerText = tasks.innerText;
    }*/
})