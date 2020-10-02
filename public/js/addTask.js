let addTaskInput = document.querySelector("input");
let listDiv = document.getElementById("listDiv");
let iconsTab = ["Done !", "Edit", "Delete"];
let tasks;
let iconsDiv;
let icons;

listBody.addEventListener("click", (e) => {
    if (e.target.innerText == "Add") {
        if (addTaskInput.value != "") {
            tasks = listDiv.appendChild(document.createElement("div"));
            tasks.classList = "toDoTask";
            tasks.innerText = addTaskInput.value;
            tasks.setAttribute("state", "to do");
            addTaskInput.value = "";
            iconsDiv = tasks.appendChild(document.createElement("div"));
            iconsDiv.setAttribute("id", "iconsDiv");
            iconsTab.forEach(element => {
                icons = iconsDiv.appendChild(document.createElement("button"));
                icons.innerText = element;
                icons.className = "icons";
            });
        }
    }
})
