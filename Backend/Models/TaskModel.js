const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TaskSchema = new schema({
    taskName: {
        type: String,
        require: true,
    },
    isDone: {
        type: Boolean,
        require: true
    }
});

const TaskModel = mongoose.model('todos', TaskSchema);
module.exports = TaskModel;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const taskSchema = new Schema({
//     taskName: {
//         type: String,
//         require: true,
//     },
//     isDone: {
//         type: Boolean,
//         require: true
//     }
// });

// module.exports = mongoose.model('Task', taskSchema);