import React from 'react'

const Todo = () => {

    const arr = [
        { todo: 'Egg' },
        { todo: 'Milk' },
        { todo: 'Cream' },
    ]
    return (
        <div>
            <div>
                <input type='text' />
                <button>Enter Todos</button>
            </div>
            <div>
                <ul>
                    {arr.map((todo, i) => {
                        return (
                            <li key={i}>
                                {todo.todo}
                                <button>Delete</button>
                                <button>Edit</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todo
