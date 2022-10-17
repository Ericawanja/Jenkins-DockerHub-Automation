const create_btn = document.querySelector(".create_Task");
const task_form = document.querySelector(".task_form");

const completion_date = document.getElementById("completion_date");

create_btn.addEventListener("click", () => {
  task_form.style.display = "block";
});


