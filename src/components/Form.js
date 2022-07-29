import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus, FaMinus } from "react-icons/fa";

const Form = ({
  input,
  setInput,
  setStatus,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  //selection
  // const statusHandler = (e) => {
  //   setStatus(e.target.value);
  // };
  return (
    <form onSubmit={onFormSubmit}>
      {/* <div className="select">
        <select onChange={statusHandler} name="status" id="id_status" multiple>
          <option value="all">All</option>
          <option value="completed">Done</option>
          <option value="uncompleted">Undone</option>
        </select>
      </div> */}
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? (
          <i>
            <FaMinus />
          </i>
        ) : (
          <i>
            <FaPlus />
          </i>
        )}
      </button>

      {/* <button
      BsFillPlusCircleFill
        className="button-add"
        onClick={statusHandler}
        value="all"
        type="submit"
      >
        all
      </button>

      <button onClick={statusHandler} value="completed" type="submit">
        completed
      </button>

      <button onClick={statusHandler} value="uncompleted" type="submit">
        uncompleted
      </button> */}
    </form>
  );
};

export default Form;
