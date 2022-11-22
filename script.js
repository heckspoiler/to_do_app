const button = document.getElementById("add");

// remove and complete icons svg format
var removeSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M177.7 0H270.3C284.1 0 296.9 7.105 304.2 18.8L332.4 64H440C444.4 64 448 67.58 448 72C448 76.42 444.4 80 440 80H8C3.582 80 0 76.42 0 72C0 67.58 3.582 64 8 64H115.6L143.8 18.8C151.1 7.105 163.9 0 177.7 0V0zM177.7 16C169.5 16 161.8 20.26 157.4 27.28L134.4 64H313.6L290.6 27.28C286.2 20.26 278.5 16 270.3 16H177.7zM76.3 459.3C78.03 480.1 95.36 496 116.2 496H331.8C352.6 496 369.1 480.1 371.7 459.3L400 119.3C400.4 114.9 404.3 111.7 408.7 112C413.1 112.4 416.3 116.3 415.1 120.7L387.6 460.6C385.2 489.7 360.1 512 331.8 512H116.2C87.04 512 62.78 489.7 60.36 460.6L32.03 120.7C31.66 116.3 34.93 112.4 39.34 112C43.74 111.7 47.61 114.9 47.97 119.3L76.3 459.3z"/></svg>';
var completeSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M437.7 106.3C440.8 109.5 440.8 114.5 437.7 117.7L165.7 389.7C162.5 392.8 157.5 392.8 154.3 389.7L10.34 245.7C7.219 242.5 7.219 237.5 10.34 234.3C13.47 231.2 18.53 231.2 21.66 234.3L159.1 372.7L426.3 106.3C429.5 103.2 434.5 103.2 437.7 106.3H437.7z"/></svg>';

//user clicked on the add button
// if there's any text inside item field, added to to do list
button.addEventListener("click", function () {
  let value = document.getElementById("item").value;

  // if (value) means if a value existed, so no empty string
  if (value) {
    addItemTodo(value);
    document.getElementById("item").value = "";
  }
});

//adds a new item to the todo list
function addItemTodo(text) {
  let list = document.getElementById("todo");

  let item = document.createElement("li");
  item.innerText = text;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  var remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeSVG;

  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = completeSVG;

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}
