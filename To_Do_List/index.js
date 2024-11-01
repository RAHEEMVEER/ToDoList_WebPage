let display = document.querySelector("input");
let btn = document.querySelector(".add-btn");
let list = document.querySelector(".unorder-list");

let errorContainer = document.querySelector(".list-container");
let error = document.querySelector(".error-text");

let todo = [];

btn.addEventListener("click", () => {
  let inputValue = display.value;
  let li = document.createElement("li");

  if (inputValue === "") {
    error.textContent = "First, Enter Your List, Then Click 'Add'.";
    errorContainer.appendChild(error);
  } else {
    error.textContent = "";
    li.textContent = inputValue;
    list.appendChild(li);
    todo.push(inputValue);
    display.value = "";

    let remIcon = document.createElement("span");
    remIcon.innerHTML = "<i class='bx bxs-trash-alt'></i>";
    li.appendChild(remIcon);
    remIcon.addEventListener("click", () => {
      li.remove();
      if (list.textContent === "") {
        error.textContent = "To Do Is Empty.";
        errorContainer.appendChild(emptyList);
      }
    });
  }
});
