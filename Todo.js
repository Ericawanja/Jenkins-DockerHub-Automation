const Todos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Task_container = document.querySelector(".task_list");
console.log(Task_container);
Task_container.innerHTML = Todos.map((todo) => {
  return `<div class="task">
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
      <div class="title">Cook</div>
    
        <span class="desc">Go and cook the supper</span>
      
      <div class="date">
        <span>22 Aug 2022</span>
        <span>2 Days remaining</span>
      </div>
    </div>

    <div class="side">      
        <span class="edit">
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
        <span class="delete">
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
}).join("");
