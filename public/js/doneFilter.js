let listDiv = document.getElementById("listDiv");
let list = listDiv.children
let listTab;

listBody.addEventListener("click", (e) => {
    listTab = Array.from(list);
    if (e.target.innerText == "Done") {
        listTab.forEach(element => {
            if (element.className != "doneTask") {
                element.classList.toggle("d-none")
            }
        });
    } else if (e.target.innerText == "To do") {
        listTab.forEach(element => {
            if (element.className != "toDoTask") {
                element.classList.toggle("d-none");
            }
        });
    } else if (e.target.innerText == "All") {
        listTab.forEach(element => {
                element.classList.remove("d-none");
        });
    }
})