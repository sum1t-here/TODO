const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types.js');
const Todo = require('./db.js');
const cors = require('cors');

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.post('/todo', async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: 'You sent wrong inputs',
    });
    return;
  }
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: 'Todo Created',
  });
});

app.get('/todos', async function (req, res) {
  const todos = await Todo.find();
  res.json({
    todos,
  });
});

app.put('/completed', async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: 'You sent wrong inputs',
    });
    return;
  }
  await Todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: 'Todo Updated Suceessfuly',
  });
});

app.listen(3000);
