import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import EditTask from "./Modals/EditTask";
import TaskImage from "../TaskImage.jpg";

const TaskCard = ({ taskObj, index, deleteTask, editListArray }) => {
  const [modal, setModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const storedCompletedStatus = localStorage.getItem(`completed_${index}`);
    if (storedCompletedStatus) {
      setCompleted(JSON.parse(storedCompletedStatus));
    }
  }, [index]);

  const toggle = () => setModal(!modal);

  const handleDelete = () => {
    deleteTask(index);
  };

  const editTask = (obj) => {
    editListArray(obj, index);
  };

  const markComplete = () => {
    const updatedCompletedStatus = !completed;
    setCompleted(updatedCompletedStatus);
    localStorage.setItem(`completed_${index}`, JSON.stringify(updatedCompletedStatus));
  };

  return (
    <div className="mt-5 mx-4">
      <Card style={{ width: "18rem" }} className={completed ? "completedCard" : ""}>
        <CardBody>
          <img alt="Loading please wait." src={TaskImage} style={{ width: "250px", height: "150px" }} />
          <CardTitle className="mt-2" tag="h5">
            {taskObj.taskName}
          </CardTitle>
          <CardText>{taskObj.description}</CardText>
          <div className="button-area">
            <button className="btn btn-primary" onClick={() => setModal(true)}>
              Edit
            </button>
            <button className="btn btn-success btn-fixed-width" onClick={markComplete}>
            {completed ? "Pending" : "Complete"}
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </CardBody>
      </Card>
      <EditTask modal={modal} toggle={toggle} editTask={editTask} taskObj={taskObj} />
    </div>
  );
};

export default TaskCard;
