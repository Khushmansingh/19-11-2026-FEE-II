import { TodoContext } from "./Context/TodoContext.js";
import { useState } from "react";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        };

        setTodos([...todos, newTodo]);
    };

    const todoclick = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, todoclick, deleteTodo }}>
            <>

                <h1>App Component</h1>
                <p>To-Do Application</p>


                <input
                  placeholder="Entre the Todo"
                ></input>

            </>
        </TodoContext.Provider>
    );
}

export default App;