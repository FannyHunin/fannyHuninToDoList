let tasks;
let uncheck;
let tasksDoneBtn;
listBody.addEventListener("click", (e) => {
    if (e.target.innerText == "Done !") {
        tasks = e.target.parentElement.parentElement
        tasks.style.backgroundColor = "rgb(169, 241, 169)";
        tasks.attributes.state == "done";
        tasksDoneBtn = e.target.parentElement
        tasksDoneBtn.style.display = "none"
        console.log(tasksDoneBtn)
        uncheck = e.target.parentElement.parentElement.appendChild(document.createElement("button"));
        uncheck.className = "icons"
        uncheck.innerText = "undo"
    }else if(e.target.innerText == "undo"){
        console.log("undo")
        e.target.style.display = "none";
        tasksDoneBtn.style.display = ""
        tasks.style.backgroundColor = ""
    }
})