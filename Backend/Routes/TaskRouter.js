const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/TaskControl');

const router = require('express').Router();

// To get all the Task
router.get('/', fetchAllTasks)

// To Create The Task
router.post('/', createTask);

// To update The Task
router.put('/:id', updateTaskById);

// To delete The Task
router.delete('/:id', deleteTaskById);

module.exports = router;