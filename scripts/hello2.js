"use strict"
//Fetches data from local storage
const todosJSON = ()=>{
let x = localStorage.getItem('todos')

try{
    return x ? JSON.parse(x) : []
}
catch(e){
    return []
}
// if(x!==null){
//     return JSON.parse(x)
// }
// else{
//     return []
// }
}

// Search Todo
const searchTodos = (todos,filter)=>{
        let renderTodos = todos.filter((todo)=>{
            return todo.text.toLowerCase().includes(filter.text.toLowerCase())
        })
           document.querySelector('#adding').innerHTML='' 
           document.querySelector('#count').innerHTML='' 
        
        renderTodos = renderTodos.filter((todo)=>{
            if(filter.checked){
                return !todo.completed
            }
            else{
                return true
            }
        })
           var filterTodos = renderTodos.filter((todo)=>{
            return todo.completed===false
        })
    
        let par=document.createElement('p')
        par.textContent = `You have ${filterTodos.length} incomplete todos`
        document.querySelector('#count').appendChild(par)
    
        renderTodos.forEach(function(t1){
            document.querySelector('#adding').appendChild(createTodos(t1))
        })
    }

//Save to local storage
const saveTodos = (todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}

const toggleTodo = (id)=>{
    const todoIndex = todos.find((todo)=>{
        return todo.id === id
    })
    if(todoIndex !== undefined){
        todoIndex.completed = !todoIndex.completed
    }

}

const deleteTodo = (id)=>{
    const todoIndex = todos.findIndex((todo)=>{
        return todo.id === id
    })

    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}

const createTodos = (t1)=>{
    const todoel= document.createElement('label')
    const containerEl = document.createElement('div')
    const p = document.createElement('a')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')
    
    checkbox.setAttribute('type','checkbox')
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change',(event)=>{
        toggleTodo(t1.id)
        saveTodos(todos)
        searchTodos(todos,filter)

    })
    
    p.textContent = t1.text
    containerEl.appendChild(p)
    //p.setAttribute('href',`edit.html#${t1.id}`)

    todoel.classList.add('list-item')
    containerEl.classList.add('list-item__container')   
    todoel.appendChild(containerEl)

    button.textContent = 'remove'
    button.classList.add('button','button--text')
    todoel.appendChild(button)
    button.addEventListener('click',(event)=>{
    deleteTodo(t1.id)
    saveTodos(todos)
    searchTodos(todos,filter)
    })
    return todoel
}




