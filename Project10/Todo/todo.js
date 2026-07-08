const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const output = document.getElementById("output");


let tasks = JSON.parse(localStorage.getItem("addTODO")) || [];

let editId = null;

function saveTask() {
    localStorage.setItem("addTODO", JSON.stringify(tasks));
}

function showTask() {
    output.innerHTML = "";

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task-item";

        div.innerHTML = `
        <h3> 
            <span class="number">${index + 1}.</span>
            <span class="task">${task.text}</span>
        </h3>

        <div class="task-actions">

            <button class="btn edit">
                <i class="ri-edit-line"></i>
            </button>

            <button class="btn delete">
                <i class="ri-delete-bin-line"></i>
            </button>

        </div>
        `;

        // Edit
        const editBtn = div.querySelector(".edit");

        editBtn.addEventListener("click", () => {
            input.value = task.text;
            editId = task.id;
        });

        const deletBtn = div.querySelector(".delete");

        deletBtn.addEventListener("click", () => {
            tasks = tasks.filter(del => del.id !== task.id);

            saveTask();
            showTask();
        });

        output.append(div);
    });
}

addBtn.addEventListener("click", () => {
    const value = input.value;

    if (value.trim() === "") {
        alert("Please enter the task!");
        return;
    }

    if (editId === null) {
        const task = {
            id: Date.now(),
            text: value
        };
        tasks.push(task);
    } else {
        const task = tasks.find(t => t.id === editId);

        if (task) {
            task.text = value;
        }

        editId = null;
    }

    saveTask();
    showTask();

    input.value = "";

});

showTask();