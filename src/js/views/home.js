import React from "react";
import "../../styles/home.css";
import { useContext, createContext, useState } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [taskList, setTaskList] = useState(store.list);

  const handleNewTask = (taskList) => {

    setTaskList(actions.addTask(0, taskList));
  };

  function handleDeleteTask(task) {
    console.log("handleDeleteTask task", task);
    setTaskList(actions.removeTask(task));
  }

  return (
    <Context.Provider value={{ taskList, handleDeleteTask, handleNewTask }}>
      <toDos />
    </Context.Provider>
  )
  }

  const ToDos = () => {
  const props = useContext(Context);
  console.log("Coming from Context.Provider: ", props);

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  const passNewTask = (e) => {
    if (e.key === "Enter") 
	{
      props.handleNewTask(inputValue);
      setInputValue("");
    }
  };
  function deleteTask(e) {
    //console.log("e from delete", e.target.outerText);
    props.handleDeleteTask(e.target.outerText);
  }
  function deleteTask(e) {
    //console.log("e from delete", e.target.outerText);
    props.handleDeleteTask(e.target.outerText);
  }

  const listItems = props.taskList.map((item, index) => {
    return (
      <li
        key={index}
        className="d-flex flex-row justify-spacing-between"
        onClick={(e) => deleteTask(e)}
      >
        {item}
        <span type="button" className="delete-button">
		<FontAwesomeIcon icon="fa-solid fa-xmark text-danger" />
        </span>
      </li>
    );
  });

  return (
    <div>
      <h1 className="todo-header">To-dos</h1>
      <div className="todos-container d-flex flex-column">
        <div className="todos-container-header d-flex flex-row">
          <span className="me-3">Tasks</span>
          <input
            type="text"
            onChange={handleChange}
            value={inputValue}
            onKeyDown={passNewTask}
            placeholder="Enter Task"
          />
        </div>

        <div className="todos-container-body flex-grow-1"></div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};
export default ToDos