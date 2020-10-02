let tasks = document.getElementById("listDiv").children;
listBody.addEventListener("click", (e) => {
    if(e.target.innerText == "Done !"){
        e.target.parentElement.parentElement.style.backgroundColor = " rgb(169, 241, 169)";
        e.target.parentElement.parentElement.attributes.state == "done";
    }
})