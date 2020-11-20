const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 12455)
    const edit = false
    return dispatch => {
        dispatch({ type: 'addTodo', payload: { id, todo, edit } })
    }
}

const deleteTodo = (id) => {
    return dispatch => {
        dispatch({ type: 'deleteTodo', payload: id })
    }
}

const updateTodo = (id) => {
    return dispatch => {
        dispatch({ type: 'updateTodo', payload: id })
    }
}

const setTodo = (id,todoValue) => {
    console.log(id)
    return dispatch => {
        dispatch({ type: 'setTodo',payload: { id, todoValue } })
    }
}

export {
    addTodo,
    deleteTodo,
    updateTodo,
    setTodo,
}