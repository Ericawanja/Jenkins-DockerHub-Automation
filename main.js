const create_btn = document.querySelector('.create_Task')
const task_form = document.querySelector('.task_form')

const title = document.getElementById('title')
const task_desc = document.getElementById('task_desc')
const completion_date = document.getElementById('completion_date')

const submit = document.querySelector('.submit')

create_btn.addEventListener('click', ()=>{
 task_form.style.display='block';
})

submit.addEventListener('click',(e)=>{
    console.log(completion_date.value)
    e.preventDefault()
    
console.log(e)
})