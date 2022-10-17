let todo_data = [];
const submit = document.querySelector(".submit");

const renderTodos = (todo_list) => {
  //console.log(todo_list)
  const Task_container = document.querySelector(".task_list");

  Task_container.innerHTML = todo_list
    .map((todo, index) => {
      const index_string = index.toString();
      console.log(typeof index_string);
      return `<div class="task" id =${index_string}>
    <div class="completed_btn">
      <input
        type="checkbox"
        id="task"
        name="completed"
        value="task 1"
        class='checkbox'
      />
    </div>
    <div class="task_details">
      <div class="title">${todo.title}</div>
    
        <span class="desc">${todo.description}</span>
      
      <div class="date">
        <span>${new Date(todo.completion_date).toDateString()}</span>
        <span>2 Days remaining</span>
      </div>
    </div>

    <div class="side">      
        <span data-id="${todo.id}" class="edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 0.5); transform: ; msfilter: "
          >
            <path
              d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"
            ></path>
          </svg>
        </span>
        <span data-id="${todo.id}" class="delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 0.5); transform: ; msfilter: "
          >
            <path
              d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
            ></path>
          </svg>
        </span>      
    </div>
  </div>`;
    })
    .join("");

  const editButtons = document.querySelectorAll(".edit");

  for (let editButton of editButtons) {
    editButton.onclick = (e) => {
      const id = e.target.parentElement.getAttribute("data-id");

      const todo = todo_data.find((todo) => todo.id === +id);

      if (todo) {
        document.getElementById("title").value = todo.title;
        document.getElementById("task_desc").value = todo.description;
        document.getElementById("completion_date").value = todo.completion_date;

        document.querySelector(".task_form").style.display = "block";
        document.querySelector("#form-title").innerHTML = "Update Task";

        document.querySelector(".submit").setAttribute('data-id', id);

      }
    };
  }


  const deleteButtons = document.querySelectorAll(".delete");

  for (let deleteButton of deleteButtons) {
    deleteButton.onclick = (e) => {
      const id = e.target.parentElement.getAttribute("data-id");

      todo_data = todo_data.filter(t=>t.id !== +id)
  
      renderTodos(todo_data)
    };
  }
};

renderTodos(todo_data);

const CreateTask = () => {
  const title = document.getElementById("title").value;
  const task_desc = document.getElementById("task_desc").value;
  const completion_date = document.getElementById("completion_date").value;
  const id = Math.ceil(Math.random() * 100000000);
  const todo = {
    id,
    title,
    description: task_desc,
    completion_date,
    status: "pending",
  };

  todo_data.unshift(todo);
  document.querySelector(".task_form").style.display = "none";
  resetForm();
  renderTodos(todo_data);
};
const UpdateTask = (id) => {
  const title = document.getElementById("title").value;
  const task_desc = document.getElementById("task_desc").value;
  const completion_date = document.getElementById("completion_date").value;

  const todo = todo_data.find((todo) => todo.id === id);

  if(todo){
    todo.title = title;
    todo.description = task_desc;
    todo.completion_date = completion_date;

    todo_data = todo_data.map(t=>{
      if(t.id === todo.id) return todo;
      return t;
    })

    renderTodos(todo_data)
  
    document.querySelector(".task_form").style.display = "none";
    resetForm();
  }

};

/**********************Event Listeners */
submit.addEventListener("click", e=>{
  let id = e.target.getAttribute('data-id');
  console.log(id);

  if(id){
    UpdateTask(+id)
  }else{
    CreateTask()
  }
});
document.querySelector(".cancel").addEventListener("click", () => {
  document.querySelector(".task_form").style.display = "none";
  resetForm();
});

function resetForm() {
  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("task_desc").value = "";
  document.getElementById("completion_date").value = "";

  document.querySelector(".submit").setAttribute('data-id', '')

  // Reset Form Title
  document.querySelector("#form-title").innerHTML = "Create Task";
}
