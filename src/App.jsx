import { TodoContext } from "./Context/TodoContext.js";
import TodoCard from "./TodoCard.jsx";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const todoclick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, todoclick, deleteTodo }}>
      <h1>App Component</h1>
      <p>To-Do Application</p>

      <div className="todo-form">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

      <div className="todo-grid">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoContext.Provider>
  );
}

export default App;