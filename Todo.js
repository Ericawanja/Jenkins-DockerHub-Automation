let todo_data = [];
const submit = document.querySelector(".submit");

const renderTodos = (todo_list) => {
  //console.log(todo_list)
  const Task_container = document.querySelector(".task_list");
  if(todo_list.length === 0){
    Task_container.innerHTML= `<div class="">
    <h4 style="text-align:center; padding-top:100px">No tasks yet. Click create button to add</h4>  
    `
  } else{
 

  Task_container.innerHTML = todo_list
    .map((todo, index) => {
      let nowDate = new Date().getTime();
      let todoCompletionDate = new Date(todo.completion_date).getTime();

      let diff = (todoCompletionDate - nowDate) / (1000 * 60 * 60);
      
      let diff_status = diff < 0 ? 'Late' : 'Remaining' 


      let diff_ = diff > 24 ? Math.floor(diff / 24)+" Days": Math.floor(diff)+" Hours";


      return `<div class="task ${
        todo.status === "completed" && "task-completed"
      }" >
    <div class="completed_btn"  >
      <input
      data-id="${todo.id}"
        type="checkbox"
        id="task_checkbox"
        name="completed"
        ${todo.status === "completed" && "checked"}
        class='checkbox task_checkbox'
      />
    </div>
    <div class="task_details">
      <div class="title">${todo.title}</div>
    
        <span class="desc">${todo.description}</span>
      
      <div class="date">
        <span>${new Date(todo.completion_date).toDateString()}</span>
        <span>${diff_} ${diff_status}</span>
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

  //edit button
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

        document.querySelector(".submit").setAttribute("data-id", id);
      }
    };
  }

  // delete task
  const deleteButtons = document.querySelectorAll(".delete");

  for (let deleteButton of deleteButtons) {
    deleteButton.onclick = (e) => {
      const id = e.target.parentElement.getAttribute("data-id");

      todo_data = todo_data.filter((t) => t.id !== +id);

      renderTodos(todo_data);
    };
  }

  // pupulate completed task

  const task_checkboxes = document.querySelectorAll(".task_checkbox");
  for (let checkbox of task_checkboxes) {
    checkbox.onclick = (e) => {
      const completed_id = e.target.getAttribute("data-id");
      const completed_task = todo_data.find(
        (todo) => todo.id === +completed_id
      );

      if (completed_task) {
        todo_data = todo_data.map((t) => {
          if (t.id === completed_task.id) {
            t.status = t.status === "completed" ? "pending" : "completed";
          }
          return t;
        });
        //const  = todo_data.filter((t) => completed_id.id == +id);
        hideNav()
        renderTodos(todo_data);
        
      }
    };
  }
}
};

renderTodos(todo_data);
//create task

const CreateTask = () => {
  const title = document.getElementById("title").value;
  const task_desc = document.getElementById("task_desc").value;
  const completion_date = document.getElementById("completion_date").value;
  if(title && task_desc && completion_date){
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
  hideNav()
  renderTodos(todo_data);
  
}
else{
  alert('Enter all details')
}
};

//update task
const UpdateTask = (id) => {
  const title = document.getElementById("title").value;
  const task_desc = document.getElementById("task_desc").value;
  const completion_date = document.getElementById("completion_date").value;

  const todo = todo_data.find((todo) => todo.id === id);

  if (todo) {
    todo.title = title;
    todo.description = task_desc;
    todo.completion_date = completion_date;

    todo_data = todo_data.map((t) => {
      if (t.id === todo.id) return todo;
      return t;
    });

    renderTodos(todo_data);

    document.querySelector(".task_form").style.display = "none";
    resetForm();
  }
};

/**********************Event Listeners */
submit.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  console.log(id);

  if (id) {
    UpdateTask(+id);
  } else {
    CreateTask();
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

  document.querySelector(".submit").setAttribute("data-id", "");

  // Reset Form Title
  document.querySelector("#form-title").innerHTML = "Create Task";
}

// populating completed tasks



// Filters
document.querySelector(".completed").onclick = () => {
  let temp = todo_data.filter((t) => t.status === "completed");
  hideNav()
  renderTodos(temp);
};

document.querySelector(".pending").onclick = () => {
  let temp = todo_data.filter((t) => t.status === "pending");
  hideNav()
  renderTodos(temp);
};
document.querySelector(".All_Tasks").onclick = () => {
  hideNav()
  renderTodos(todo_data);
};

document.querySelector(".late").onclick = () => {
  let temp = todo_data.filter((t) => {
    let nowDate = new Date().getTime();
    let todoCompletionDate = new Date(t.completion_date).getTime();

    return todoCompletionDate - nowDate < 1;
  });
  hideNav()
  renderTodos(temp);
};

document.querySelector(".today").onclick = () => {
  let temp = todo_data.filter((t) => {
    let nowDate = new Date().getTime();
    let todoCompletionDate = new Date(t.completion_date).getTime();

    let diff = (todoCompletionDate - nowDate) / (1000 * 60 * 60);
    return diff > 0 && diff < 24;
  });
  hideNav()
  renderTodos(temp);

};

/*const completed_btn = document.getElementsByClassName("completed")[0];
completed_btn.addEventListener("click", completed_tasks);*/

//opening form
const create_btn = document.querySelector(".create_Task");
const task_form = document.querySelector(".task_form");

create_btn.addEventListener("click", () => {
  task_form.style.display = "block";
});

//hide the nav
function hideNav(){
  const nav_element = document.querySelector('#navid')

if(nav_element.classList.contains('open'))  nav_element.className = 'nav'


}

