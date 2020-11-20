const todoList = {
    todo: [
        { id: 1, todo: 'Egg', edit: false },
        { id: 2, todo: 'Milk', edit: false },
        { id: 3, todo: 'Cream', edit: false },
    ]
}


const todos = (state = todoList, action) => {
    switch (action.type) {
        case "addTodo":
            return ({
                ...state,
                todo: [action.payload, ...state.todo]
            })
        case "deleteTodo":
            return ({
                ...state,
                todo: state.todo.filter((todo => todo.id !== action.payload))
            })
        case "updateTodo": {
            const newTodo = [...state.todo]
            newTodo[action.payload].edit = true
            return ({
                todo: [...newTodo]
            })
        }
        case "setTodo":
            const newTodo = [...state.todo]
            newTodo[action.payload.id].todo = action.payload.todoValue
            newTodo[action.payload.id].edit = false
            return ({
                todo: [...newTodo]
            })
        default:
            return state
    }
}

export default todos