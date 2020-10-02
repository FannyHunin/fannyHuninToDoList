let yesOrNoArr = ["yes", "no"]
listBody.addEventListener("click", (e) => {
    if (e.target.innerText == "Delete") {
        e.target.parentElement.parentElement.style.backgroundColor = "tomato";
        let erase = e.target.parentElement.parentElement.appendChild(document.createElement("div"));
        erase.innerText = "Voulez-vous vraiment supprimer ?";
        erase.style.fontSize = "20px";
        yesOrNoArr.forEach(element => {
            let yesOrNo = erase.appendChild(document.createElement("button"));
            yesOrNo.innerText = element;
            yesOrNo.className = "yesOrNo";
        });
    } else if (e.target.innerText == "yes") {
        e.target.parentElement.parentElement.remove()
    } else if(e.target.innerText == "no"){
        e.target.parentElement.parentElement.style.backgroundColor = "";
        e.target.parentElement.remove()
    }
})