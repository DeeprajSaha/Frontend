const taskInput = document.querySelector('#taskInput');
const category = document.querySelector('#category');
const addBtn = document.querySelector('#addBtn');
const taskContainer = document.querySelector('#taskContainer');

const allBtn = document.querySelector("#all")
const workBtn = document.querySelector("#work")
const studyBtn = document.querySelector("#study")
const personalBtn = document.querySelector("#personal")

const toggelTheme = document.querySelector("#themeBtn");

const grandParent = document.querySelector("#grandParent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

const eventLog = document.querySelector("#event-log");

const eventToggle = document.querySelector("#toggleEve");

let localData = JSON.parse(localStorage.getItem("addTask")) || [];

localData.forEach((task) => {
    createTask(task);
});

function createTask(task) {

    // create items container
    const taskCard = document.createElement("div");

    // creatin class -> task-card
    taskCard.classList.add("task-card")

    taskCard.setAttribute("data-id", task.id);
    taskCard.setAttribute("data-status", task.status);
    taskCard.setAttribute("data-category", task.category);

    // creating html ele
    taskCard.innerHTML += `
    <div class="task-info">
        <p>${task.title}</p>
        <p>${task.category}</p>
        <p class="status">${task.status}</p>
        <button class="edit-btn">Edit</button>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    </div>
    `;

    // edit button 
    const editBtn = taskCard.querySelector(".edit-btn")

    editBtn.addEventListener("click", () => {

        if (!confirm("You can update this task")) return;

        taskInput.value = task.title;
        category.value = task.category;
        statusEl.value = task.status

        localData = localData.filter(item => item.id !== task.id);

        localStorage.setItem("addTask", JSON.stringify(localData));
        
        taskCard.remove()
    })

    // delete button
    const deleteBtn = taskCard.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        if (!confirm("Are you sure you want to delete this task?")) return;

        taskCard.remove();

        localData = localData.filter((item) => {
            return item.id !== task.id;
        });
        localStorage.setItem("addTask", JSON.stringify(localData));
    });


    // complete button
    const completeBtn = taskCard.querySelector(".complete-btn");

    const statusEl = taskCard.querySelector(".status");

    completeBtn.addEventListener("click", () => {
        taskCard.classList.toggle("completed");

        if (task.status === "completed") {
            task.status = "pending";
        } else {
            task.status = "completed";
        }
        statusEl.innerText = task.status;

        completeBtn.innerText = task.status === "completed" ? "Pending" : "Complete";

        localStorage.setItem("addTask", JSON.stringify(localData));
    })

    if (task.status === "completed") {
        taskCard.classList.add("completed");
    }

    // display ele
    taskContainer.append(taskCard)
}

addBtn.addEventListener("click", () => {

    if (taskInput.value.trim() === "") {
        alert("Please fill all the fields..")
        return;
    }

    // local storage
    const addTask = {
        id: Date.now(),
        title: taskInput.value,
        category: category.value,
        status: "pending"
    }

    localData.push(addTask);

    localStorage.setItem("addTask", JSON.stringify(localData));

    createTask(addTask)
    // clear input field
    taskInput.value = "";
}, { once: true });


allBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-card");

    tasks.forEach((task) => {
        task.style.display = "block";
    });
});

workBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-card")

    tasks.forEach((task) => {
        if (task.dataset.category === "work") {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })
});

studyBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-card")

    tasks.forEach((task) => {
        if (task.dataset.category === "study") {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })
});

personalBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task-card")

    tasks.forEach((task) => {
        if (task.dataset.category === "personal") {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })
});

// Theme

toggelTheme.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Event Prop.....

let isCapture = true;

// 4. Attach the listeners
grandParent.addEventListener("click", () => {
    showEvent("Grandparent Clicked");
}, isCapture);

parent.addEventListener("click", () => {
    showEvent("Parent Clicked");
}, isCapture);

child.addEventListener("click", () => {
    showEvent("Child Clicked");
    isCapture = !isCapture; // Flips the variable value
    console.log(`-> Variable 'isCapture' is now: ${isCapture}`);
}, isCapture);

function showEvent(text) {
    const p = document.createElement("p");
    p.textContent = text;
    eventLog.append(p)
}