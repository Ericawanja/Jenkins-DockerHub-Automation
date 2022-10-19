const create_bt = document.querySelector(".create_Task");
const task_form_main = document.querySelector(".task_form");

create_bt.addEventListener("click", () => {
  task_form_main.style.display = "block";
});

const nav = document.querySelector(".nav");
const menu_icon = document.querySelector(".menu_icon");

const formOpenClicks = () => {
  const nav = document.querySelector("#navid");

  if (!nav.classList.contains("open")) {
    nav.className = "open";
    menu_icon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 24 24" style="fill: rgba(113, 9, 105, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>';
  } else {
    nav.className = "nav";
    menu_icon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="54" viewBox="0 0 24 24" style="fill: rgb(113, 9, 105);transform: ;msFilter:;"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>';
  }
};


//eventlisteners to menu and add icon to open the form
    menu_icon.addEventListener("click", formOpenClicks);
  document.querySelector(".addIcon").addEventListener("click", formOpenClicks);

///changing menu icon
