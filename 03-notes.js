var subContainers = document.querySelectorAll(".sub-container");
var addNotes = document.querySelectorAll(".btn");

addNotes.forEach(function (element) {
  element.addEventListener("click", () => {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var textarea = document.createElement("textarea");
    textarea.setAttribute("class", "content");
    textarea.setAttribute("contenteditable", "true");
    textarea.setAttribute("placeholder", "Type your notes here . . . ");
    textarea.setAttribute("cols", "40");
    textarea.setAttribute("rows", "5");
    var i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-trash");
    i.setAttribute("id", "trash");
    container.appendChild(textarea);
    container.appendChild(i);
    subContainers[0].appendChild(container);
  });
});


subContainers.forEach(function (deleteItem) {
  deleteItem.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-trash")) {
      e.target.parentElement.remove();
    }
      });
    });
