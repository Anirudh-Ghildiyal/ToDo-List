import React, { useEffect, useState } from "react";
import CreateTask from "./Modals/CreateTask";
import TaskCard from "./TaskCard";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("tasklist", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const editListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const markComplete = (index) => {
    let completed = [...completedTasks, index];
    setCompletedTasks(completed);
  };

  return (
    <div className="total-container">
      <div className="title-container text-center">
        <h3 className="title">To-Do List</h3>
        <button className="btn btn-primary task-button" onClick={() => setModal(true)}>
          Add New Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <TaskCard
            taskObj={obj}
            index={index}
            completed={completedTasks.includes(index)}
            deleteTask={deleteTask}
            editListArray={editListArray}
            markComplete={markComplete}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};

export default ToDoList;
