let button = document.getElementById("add1");
let input = document.getElementById("input-li");
let ul = document.getElementById("add-li");
let button1 = document.getElementById("rm-itm");

button.addEventListener("click", () => {
  // console.log ("coba aja");
  // console.log (input.value);
  if (input.value.length > 0) {
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(input.value));
    ul.appendChild(list);
    input.value = "";
  }
});

button1.addEventListener("click", () => {
  // console.log ("coab");
    let remove = document.querySelector(".list-na li");
    remove.parentNode.removeChild(remove);
});

input.addEventListener("keypress", (event) => {
  // console.log ("coba aja");
  // console.log (input.value);
  if (input.value.length > 0 && event.keyCode === 13) {
    let list = document.createElement("li");
    list.appendChild(document.createTextNode(input.value));
    ul.appendChild(list);
    input.value = "";
  }
});

