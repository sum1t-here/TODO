import { useEffect, useState } from 'react';
import { CreateTodo } from './components/CreateTodo';
import './App.css';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos') // Correct endpoint for getting todos
      .then((response) => response.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.error('Error fetching todos:', error));
  }, [todos]); // Empty dependency array to fetch todos only once when the component mounts

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
