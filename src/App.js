import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Status from "./components/Status";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  const [status, setStatus] = useState("all");
  const [FilteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <main>
      <div className="container">
        <div className="app-wrapper">
          <div className="headers">
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              setStatus={setStatus}
            />
          </div>

          <div>
            <TodosList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
              FilteredTodos={FilteredTodos}
            />
          </div>
          <div>
            <Status setStatus={setStatus} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
