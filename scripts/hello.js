"use strict"

//alert("hello")

let todos = todosJSON()
//console.log(uuidv4())
console.log(todos)

const filter = {
    text:'',
    checked:false
}

searchTodos(todos, filter)

document.querySelector('#todo-enter').addEventListener('input',(event)=>{
    event.preventDefault()
    filter.text=event.target.value
    searchTodos(todos,filter)
    })   

document.querySelector('#new-todo').addEventListener('submit',(e)=>{
    const text = e.target.elements.text.value.trim()
    e.preventDefault()
    if(text.length>0){
        const id1 = uuidv4()
        todos.push({
            id:id1,
            text:e.target.elements.text.value,
        completed:false})
        saveTodos(todos)
        //location.assign(`\edit.html#${id1}`)
        searchTodos(todos,filter)
        e.target.elements.text.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change',(e)=>{
    //console.log(e.target.checked)
    filter.checked = e.target.checked
    searchTodos(todos, filter)
})

window.addEventListener('storage',(e)=>{
    if(e.key === 'todos'){
        todos = JSON.parse(e.newValue)
        searchTodos(todos, filter)
    }
})