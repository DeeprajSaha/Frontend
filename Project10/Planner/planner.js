const inputs = document.querySelectorAll(".time-slot input");
const clearBtn = document.getElementById("clrBtn");

let planner = JSON.parse(localStorage.getItem("planner")) || [];

inputs.forEach((input, index) => {

    input.value = planner[index] || "";

});


inputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        planner[index] = input.value;

        localStorage.setItem("planner", JSON.stringify(planner));

    });

});

clearBtn.addEventListener('click', () => {
    planner = [];
    localStorage.removeItem("planner");
    
    inputs.forEach((input) => {
        input.value = "";
    });
})