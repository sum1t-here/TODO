const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://mazumdarsumit3:FVgfAkd7aaMrvEfD@cluster0.g8ydaku.mongodb.net/todos'
  )
  .then(() => {
    console.log('Mongo db connected');
  })
  .catch((err) => {
    console.log(err);
  });

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model('todos', todoSchema);
module.exports = Todo;
