const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const dltAll = document.getElementById('dlt-btn');
function dltBtn(){
   todoList.innerHTML=""
}
function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        input.classList.add('input-error');
        setTimeout(() => input.classList.remove('input-error'), 500);
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="btn-group">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const textSpan = li.querySelector('.task-text');
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');

  
    editBtn.addEventListener('click', () => {
        if (editBtn.innerText === "Edit") {
            textSpan.contentEditable = true;
            textSpan.focus();
            editBtn.innerText = "Save";
            editBtn.style.backgroundColor = "#27ae60";
        } else {
            textSpan.contentEditable = false;
            editBtn.innerText = "Edit";
            editBtn.style.backgroundColor = "#f39c12";
        }
    });

    
    deleteBtn.addEventListener('click', () => {
        li.style.opacity = '0';
        setTimeout(() => li.remove(), 200);
    });

    textSpan.addEventListener('click', () => {
        if (textSpan.contentEditable !== "true") {
            textSpan.classList.toggle('completed');
        }
    });

    todoList.appendChild(li);
    input.value = "";
}


addBtn.addEventListener('click', addTask);
dltAll.addEventListener('click', dltBtn);
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });