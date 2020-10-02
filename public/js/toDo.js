//body
let body = document.querySelectorAll("body")[0];
let listBody = body.appendChild(document.createElement("div"));
listBody.setAttribute("id", "listBody");

//add task
let addTaskDiv = listBody.appendChild(document.createElement("div"));
let addTaskTitle = addTaskDiv.appendChild(document.createElement("h2"));
addTaskTitle.innerText = "Add task";
let addTaskSubDiv = addTaskDiv.appendChild(document.createElement("div"));
let addTaskInput = addTaskSubDiv.appendChild(document.createElement("input"));
addTaskInput.setAttribute("id", "addTaskInput")
let addTaskBtn = addTaskSubDiv.appendChild(document.createElement("button"));
addTaskBtn.innerText = "Add";
addTaskBtn.setAttribute("id", "addTaskBtn");

//filters
let filtersDiv = listBody.appendChild(document.createElement("div"));
filtersDiv.setAttribute("id", "filtersDiv");
let filters = ["To do", "Done", "All"];
filters.forEach(element => {
    let filtersBtn = filtersDiv.appendChild(document.createElement("button"));
    filtersBtn.innerText = element;
    filtersBtn.classList = "filtersBtn"
});

//list
let listDiv = listBody.appendChild(document.createElement("div"));
listDiv.setAttribute("id", "listDiv");