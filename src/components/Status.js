import React from "react";

const Status = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  // const All = () => {
  //   setFilteredTodos(todos.filter((todo) => todo.completed === true));
  // }
  return (
    <div className="select">
      {/* <select onChange={statusHandler} name="status" id="id_status" multiple>
        <option className="All" value="all">
          All
        </option>
        <option className=" complete" value="completed">
          Done
        </option>
        <option className="uncomplete" value="uncompleted">
          Undone
        </option>
      </select> */}

      <button
        value="all"
        onClick={statusHandler}
        className="butt"
        type="submit"
      >
        All
      </button>
      <button
        value="completed"
        onClick={statusHandler}
        className="butt"
        type="submit"
      >
        Done
      </button>
      <button
        value="uncompleted"
        onClick={statusHandler}
        className="butt"
        type="submit"
      >
        undone
      </button>
    </div>
  );
};

export default Status;
