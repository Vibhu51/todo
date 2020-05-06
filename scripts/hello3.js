"use strict"
//alert('bhai mai hu bhi ki nai')
const todoId = location.hash.substring(1)
let todos = todosJSON()
const tt= document.querySelector('#todo-title')
const td = document.querySelector('#del')
let todo = todos.find((todo)=>todo.id===todoId)
//console.log('jai shree ram')
if(todo === undefined){
    location.assign('/index.html')
}
tt.value = todo.text
tt.addEventListener('input',(e)=>{
    todo.text = e.target.value
    saveTodos(todos)    
})

td.addEventListener('click',(e)=>{
    deleteTodo(todo.id)
    saveTodos(todos)
    location.assign('/index.html')
})

window.addEventListener('storage',(e)=>{
    if(e.key === 'todos'){
        console.log(e)
        todos = JSON.parse(e.newValue)
        let todo = todos.find((todo)=>todo.id===todoId)
//console.log('jai shree ram')
if(todo === undefined){
    location.assign('/index.html')
}
tt.value = todo.text
    }
})