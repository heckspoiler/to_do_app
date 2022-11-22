const button = document.getElementById("add");

//user clicked on the add button
// if there's any text inside item field, added to to do list
button.addEventListener("click", function () {
  let value = document.getElementById("item").value;

  // if (value) means if a value existed, so no empty string
  if (value) {
    console.log(value);
  }
});
