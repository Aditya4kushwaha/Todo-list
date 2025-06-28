let cnt = 1;

function deleteTodo(index) {
  const el = document.getElementById("todo-" + index);
  el.parentNode.removeChild(el);
}

function addTodo() {
  const inputEl = document.querySelector("input");
  const value = inputEl.value;
  const spanEl = document.createElement("span");
  const delBtn = document.createElement("button");
  const updBtn = document.createElement("button");

  spanEl.innerHTML = value;
  delBtn.innerHTML = "Delete";
  updBtn.innerHTML = "Update";

  // create div element and append span and button to this div
  const divEl = document.createElement("div");
  divEl.classList.add("todo-item");

  divEl.appendChild(spanEl);
  divEl.appendChild(updBtn);
  divEl.appendChild(delBtn);

  // delete functionality
  delBtn.addEventListener("click", function () {
    divEl.remove();
  });

  // update functionality
  updBtn.addEventListener("click", function () {
    const newValue = prompt("Update todo :", spanEl.innerHTML);
    if (newValue) {
      spanEl.innerHTML = newValue;
    }
  });

  // append this to the body
  const parentEl = document.querySelector("body");
  parentEl.appendChild(divEl);

  inputEl.value = "";
}
