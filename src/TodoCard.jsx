import { useContext } from "react";
import { TodoContext } from "./Context/TodoContext.js";
import "./todocard.css";

function TodoCard({ todo }) {
  const { todoclick, deleteTodo } = useContext(TodoContext);

  return (
    <div className={`todo-card ${todo.completed ? "completed" : ""}`}>
      <h3 className="todo-title">{todo.title}</h3>

      <div className="todo-actions">
        <button onClick={() => todoclick(todo.id)}>
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoCard;