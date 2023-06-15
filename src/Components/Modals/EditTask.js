import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, editTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") setTaskName(value);
    else setDescription(value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["taskName"] = taskName;
    tempObj["description"] = description;
    editTask(tempObj);
  };

  useEffect(() => {
    setTaskName(taskObj.taskName);
    setDescription(taskObj.description);
  }, []);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="taskName">Edit Title</label>
              <input
                type="text"
                name="taskName"
                id=""
                className="form-control"
                value={taskName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Edit Description</label>
              <textarea
                name="description"
                id=""
                rows="5"
                className="form-control"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleEdit}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditTask;
