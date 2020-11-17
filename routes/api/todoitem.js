const express = require('express')
const router = express.Router();

//Item model
const Todo = require('../../Model/todo')


// get request to api/todoitem
router.get('/', (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then((todo) => res.json(todo))
});

// Post request to api/todoitem
router.post('/', (req, res) => {
    const newTodo = new Todo({
        todo: req.body.todo
    });

    newTodo.save()
        .then((todo) => res.json(todo))
});

//Delete request from api/todoitem
router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove().then(() => res.json({ sucess: true })))
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router