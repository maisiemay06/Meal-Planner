let shoppingList = document.getElementById("shoppingList");

let listItems = document.getElementsByTagName("LI");
let i = 0;
for (i=0; i<listItems.length;i++) {
    let span = document.createElement("SPAN");
    let cross = document.createTextNode("x");
    span.className = "close";
    span.appendChild(cross);
    listItems[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let j = 0;
for (j=0; j<close.length; j++) {
    close[j].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

shoppingList.addEventListener('click', function(event) {
    event.target.classList.toggle("checked");
}, false)

function addListItem() {
    let input = document.getElementById("newListInput").value;
    console.log(input);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    shoppingList.appendChild(li);
}

