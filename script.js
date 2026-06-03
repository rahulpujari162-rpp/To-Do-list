function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    span.onclick = function() {
        span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}