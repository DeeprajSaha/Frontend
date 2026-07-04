const addBtn = document.querySelector(".add-btn");
const close = document.querySelector(".close");
const overlay = document.querySelector("#overlay");

const typeInput = document.getElementById("type");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");

const balance = document.getElementById("balance");
const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const totalTransactions = document.getElementById("totalTransactions");

const logoutBtn = document.querySelector("#logout");
const resetBtn = document.querySelector("#resetAll");


const dashboardBtn = document.getElementById("dashboardBtn");
const settingsBtn = document.getElementById("settingsBtn");

const dashboardSection = document.getElementById("dashboardSection");
const settingsSection = document.getElementById("settingsSection");


const transactionBody = document.getElementById("transactionBody");


const ctx = document.getElementById("expenseChart");


const themeToggle = document.getElementById("themeToggle");

let expData = JSON.parse(localStorage.getItem('expData')) || [];

const currentCurrency = localStorage.getItem("currency") || "$";

const expenseChart = new Chart(ctx, {
    type: "bar",

    data: {
        labels: ["Income vs Expense"],

        datasets: [
            {
                label: "Income",
                data: [0],
                backgroundColor: "#16a34a"
            },
            {
                label: "Expense",
                data: [0],
                backgroundColor: "#dc2626"
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

allTransactions();
updateCards();

const today = new Date().toLocaleDateString("en-CA");
dateInput.value = today;

let editTarget = null;


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});

resetBtn.addEventListener("click", () => {
    if (confirm("Are you sure? This will delete all transactions.")) {
        localStorage.removeItem("expData");
        expData = [];
        allTransactions();
        updateCards();
    }
});


dashboardBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dashboardSection.classList.remove("hidden");
    settingsSection.classList.add("hidden");

    dashboardBtn.classList.add("active");
    settingsBtn.classList.remove("active");
});

settingsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dashboardSection.classList.add("hidden");
    settingsSection.classList.remove("hidden");

    settingsBtn.classList.add("active");
    dashboardBtn.classList.remove("active");
});

const loggedUser = document.getElementById("loggedUser");

const currentUser = localStorage.getItem("loggedInUser");

loggedUser.textContent = currentUser || "Guest";

function allTransactions() {

    transactionBody.innerHTML = "";

    expData.forEach((item) => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${item.date}</td>
        <td>${item.description}</td>
        <td>${item.category}</td>
        <td class="${item.type === "income" ? "income-amount" : "expense-amount"}">
            ${item.type === "income" ? "+" : "-"}$${item.amount}
        </td>
        <td>
            <button class="action-btn edit-btn">
                <i class="ri-edit-line"></i>
            </button>

            <button class="action-btn delete-btn">
                <i class="ri-delete-bin-line"></i>
            </button>
        </td>
        `;

        // delete......
        let deletBtn = tr.querySelector(".delete-btn");

        deletBtn.addEventListener("click", () => {

            expData = expData.filter((date) => {
                return date.id !== item.id;
            })
            localStorage.setItem("expData", JSON.stringify(expData));

            allTransactions();
            updateCards();
        })

        // edit......
        let editBtn = tr.querySelector(".edit-btn");

        editBtn.addEventListener("click", () => {

            editTarget = item.id;

            overlay.classList.remove("hidden");

            typeInput.value = item.type;
            descriptionInput.value = item.description;
            categoryInput.value = item.category;
            dateInput.value = item.date;
            amountInput.value = item.amount;

        })


        transactionBody.appendChild(tr);

    });
};

function updateCards() {
    let incomeSum = 0;
    let expenseSum = 0;

    expData.forEach((item) => {
        if (item.type === 'income') {
            incomeSum += Number(item.amount);
        } else {
            expenseSum += Number(item.amount);
        }
    })

    totalIncome.innerHTML = `$${incomeSum}`;
    totalExpense.innerHTML = `$${expenseSum}`;

    const balanceAmount = incomeSum - expenseSum;

    balance.innerHTML = `${currentCurrency}${balanceAmount}`;
    totalIncome.innerHTML = `${currentCurrency}${incomeSum}`;
    totalExpense.innerHTML = `${currentCurrency}${expenseSum}`;

    totalTransactions.innerHTML = expData.length;

    expenseChart.data.datasets[0].data = [incomeSum];
    expenseChart.data.datasets[1].data = [expenseSum];

    expenseChart.update();

}

addBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
})

close.addEventListener("click", () => {
    overlay.classList.add("hidden")
})

saveBtn.addEventListener("click", () => {
    const type = typeInput.value;
    const description = descriptionInput.value;
    const amount = amountInput.value;
    const date = dateInput.value;
    const category = categoryInput.value;

    if (
        description.trim() === "" ||
        amount.trim() === "" ||
        date.trim() === "" ||
        category.trim() === "" ||
        type.trim() === ""
    ) {
        alert("Please fill all the fields")
        return;
    }

    if (editTarget === null) {

        let inputExpData = {
            id: Date.now(),
            type,
            description,
            amount,
            date,
            category
        }

        expData.push(inputExpData);

    } else {
        let transaction = expData.find(item => item.id === editTarget);

        transaction.type = typeInput.value;
        transaction.description = descriptionInput.value;
        transaction.amount = amountInput.value;
        transaction.category = categoryInput.value;
        transaction.date = dateInput.value;

        editTarget = null;
    }
    localStorage.setItem("expData", JSON.stringify(expData));

    console.log({
        type,
        description,
        amount,
        date,
        category
    });

    allTransactions();
    updateCards();

    typeInput.value = typeInput.options[0].value;
    descriptionInput.value = "";
    amountInput.value = "";
    categoryInput.value = categoryInput.options[0].value;

    overlay.classList.add("hidden");
})
