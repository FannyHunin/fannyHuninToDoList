let tasks;
let uncheck;
let tasksDoneBtn;
listBody.addEventListener("click", (e) => {
    if (e.target.innerText == "Done !") {
        tasks = e.target.parentElement.parentElement
        tasks.className = "doneTask";
        tasksDoneBtn = e.target.parentElement
        tasksDoneBtn.style.display = "none"
        uncheck = e.target.parentElement.parentElement.appendChild(document.createElement("button"));
        uncheck.className = "icons"
        uncheck.innerText = "undo"
    } else if (e.target.innerText == "undo") {
        e.target.style.display = "none";
        tasksDoneBtn.style.display = ""
        tasks.className = 'toDoTask'
    }
})