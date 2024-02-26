const express = require("express");
const mongoose = require('mongoose');
const app = express();

const {
  checkAuthentication,
  hasValidRole,
  validData,
  duplicateEntry
} = require("./middleware/auth.js");

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/apidb');
const todoSchema = mongoose.Schema({
    title: String,
    status: Boolean
});

const todoModel = mongoose.model('todos', todoSchema);

app.use(express.json());

app.get("/api/todos", async (req, res) => {
    const todos = await todoModel.find();
    res.send(todos);
});

app.post('/api/todos', (req, res) => {
    console.log(req.body);
    todoModel.create(req.body);
    res.send('Todos created');
});

app.listen(8000, () => {
    console.log("Server has started on PORT 8000");
})
;


