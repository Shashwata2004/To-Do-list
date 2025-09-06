let button = document.querySelector("button");
let form_input = document.querySelector("input");

button.addEventListener("click", function (e) {
    e.preventDefault();

    let input_value = form_input.value;
    if(input_value === "") {
        return ;
    }

    let li = document.createElement("li");
    let p = document.createElement("p");
    let del_button = document.createElement("button");
    del_button.className = "cross";

    p.textContent = input_value;
    del_button.textContent = "✖";

    li.appendChild(p);
    li.appendChild(del_button);
    taskList.appendChild(li);

    form_input.value = "";
});

taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("cross")) {
        e.target.parentNode.remove();
    }

    if(e.target.tagName === "P") {
        e.target.classList.toggle("completed");
    }
});
