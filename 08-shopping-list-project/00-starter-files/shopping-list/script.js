const toDoInput = document.getElementById('item-input')
const toDoList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const toDoForm = document.getElementById('item-form')
const filterInput = document.getElementById('filter')

console.log('helo')

toDoForm.addEventListener('submit', createToDo)
toDoList.addEventListener('click', removeToDo)
clearBtn.addEventListener('click', clearToDos)
filterInput.addEventListener('keydown', filterToDos)

function filterToDos(){
    console.log(toDoList.children)
    const children = Array.from(toDoList.children)
    console.log(filterInput)
    children.forEach(item => {
        if (item.innerText.toLowerCase().includes(filterInput.value.toLowerCase())){
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}

function clearToDos(){
    toDoList.innerHTML = ''
}

function removeToDo(e){
    e.preventDefault()
    const parentElement = e.target.parentElement
    if(parentElement.className.includes('remove-item')){
        e.target.parentElement.parentElement.remove()
    }
}

function createToDo(e){
    e.preventDefault()
    if(toDoInput.value.length === 0){
        alert('please input something')
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = toDoInput.value
    const btn = document.createElement('button');
    btn.classList = 'remove-item btn-link text-red'
    const icon = document.createElement('icon')
    icon.classList = 'fa-solid fa-xmark'
    btn.appendChild(icon)
    li.appendChild(btn)
    toDoList.appendChild(li)
    toDoInput.value = ''
}