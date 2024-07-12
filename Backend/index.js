const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const { fetchAllTasks } = require('./Controllers/TaskControl');
const cors = require('cors');

require('dotenv').config();
require('./Models/db');
app.use(bodyParser.json());


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello From Abhi....")
});

app.use('/tasks', TaskRouter);

app.listen(PORT, () => {
    console.log(`Server is Started Successfully on PORT = ${PORT}`);
});


