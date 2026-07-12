const addBtn = document.querySelector("#addBtn");
const overlay = document.querySelector("#overlay");
const saveBtn = document.querySelector("#saveBtn");

const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#description");

const notesContainer = document.querySelector("#notesContainer");

const close = document.querySelector(".close");

const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeIcon.className = "ri-sun-line";
} else {
    themeIcon.className = "ri-moon-line";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeIcon.className = "ri-sun-line";
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.className = "ri-moon-line";
        localStorage.setItem("theme", "light");
    }
});

let editTarget = null;

let localData = JSON.parse(localStorage.getItem("addNotes")) || [];

localData.forEach(note => {
    saveFunction(note.title, note.description, note.id);
});

function addTime() {
    const now = new Date();
    const year = now.getFullYear();
    const monthName = now.toLocaleString('en-US', { month: 'short' });
    const date = now.getDate(); 

    let customString = '';
    if (!editTarget) {
        customString = `Created at ${date} ${monthName} ${year}`;
    } else {
        customString = `Updated at ${date} ${monthName} ${year}`;
    }

    return customString;
}

function saveFunction(title, description, id) {
    const note = document.createElement("div");
    note.classList.add("note-card");
    
    note.dataset.id = id; 

    note.innerHTML = `
        <div class="task-info">
            <h3>${title}</h3>
            <p>${description}</p>
            <p>${addTime()}</p>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;
    
    overlay.classList.add("hidden");

    const editBtn = note.querySelector(".editBtn");
    editBtn.addEventListener("click", () => {
        overlay.classList.remove("hidden");

        const currentTitle = note.querySelector("h3").innerText;
        const currentDesc = note.querySelector("p").innerText;

        titleInput.value = currentTitle;
        descInput.value = currentDesc;

        editTarget = note;
    });

    const deleteBtn = note.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this task?")) {
            note.remove();
            
            localData = localData.filter((item) => {
                return item.id !== id;
            });
            localStorage.setItem("addNotes", JSON.stringify(localData));
        }
    });
    
    notesContainer.append(note);
    return note;
}

addBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
});

saveBtn.addEventListener("click", () => {
    const title = titleInput.value;
    const description = descInput.value;

    if (title === "" || description === "") {
        alert("Please fill all the fields!!!");
        return;
    }

    if (!editTarget) {
    
        const newId = Date.now();
        
        
        saveFunction(title, description, newId);

        const addNotes = {
            id: newId,
            title: title,
            description: description
        };
        localData.push(addNotes);
        localStorage.setItem("addNotes", JSON.stringify(localData));
        
    } else {
        editTarget.querySelector("h3").innerText = title;
        const paragraphs = editTarget.querySelectorAll("p");
        paragraphs[0].innerText = description;
        paragraphs[1].innerText = addTime();

        
        const targetId = Number(editTarget.dataset.id);
        const dataIndex = localData.findIndex(item => item.id === targetId);
        
        if (dataIndex !== -1) {
            localData[dataIndex].title = title;
            localData[dataIndex].description = description;
            localStorage.setItem("addNotes", JSON.stringify(localData));
        }

        editTarget = null;
    }

    overlay.classList.add("hidden");
    titleInput.value = "";
    descInput.value = "";
});

close.addEventListener("click", () => {
    overlay.classList.add("hidden");
    
    titleInput.value = "";
    descInput.value = "";
    editTarget = null; 
});