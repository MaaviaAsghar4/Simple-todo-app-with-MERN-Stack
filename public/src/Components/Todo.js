import React, { useState } from 'react'
import './Allcss.css'

const Todo = () => {

    const [todoItem, setTodoItem] = useState('')

    const [arr, setArray] = useState([
        { id: 1, todo: 'Egg', edit: false },
        { id: 2, todo: 'Milk', edit: false },
        { id: 3, todo: 'Cream', edit: false },
    ])

    let todoitem = e => {
        setTodoItem(e.target.value)
    }

    let addTodo = () => {

        arr.push({
            id: Math.floor(Math.random() * 12455),
            todo: todoItem,
        })
        setArray(arr)
        setTodoItem('')
    }

    let deleteTodo = id => {
        setArray(arr.filter(todo => todo.id !== id))
    }

    let editTodo = (index) => {
        const newTodo = [...arr]
        newTodo[index].edit = true
        setArray(newTodo)
    }

    let updateTodo = (index) => {
        const newTodo = [...arr]
        newTodo[index].edit = false
        setArray(newTodo)
    }

    let handlechange = (e, index) => {
        const newTodo = [...arr]
        newTodo[index].todo = e.target.value
        setArray(newTodo)
    }
    return (
        <div>
            <div className='todo-input'>
                <input onChange={todoitem} value={todoItem} type='text' />
                <button onClick={addTodo}>Enter Todos</button>
            </div>
            <div className='todo-container'>
                {arr.map((todo, i) => {
                    return (
                        <div key={todo.id} className='todo-list'>
                            {todo.edit ? <input type='text' value={todo.todo} onChange={(e) => handlechange(e, i)} /> : <span>{todo.todo}</span>}
                            <div>
                                <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
                                {todo.edit ? <button className='edit' onClick={() => updateTodo(i)}>Update</button> : <button className='edit' onClick={() => editTodo(i)}>Edit</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo
