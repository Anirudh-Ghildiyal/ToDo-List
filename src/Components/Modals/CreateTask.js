import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e) =>{
        const {name,value} = e.target;

        if(name === "taskName")
        setTaskName(value);
        else
        setDescription(value);
    }

    const handleSave = () =>{
        let taskObj = {};
        taskObj["taskName"] = taskName;
        taskObj["description"] = description;
        save(taskObj);
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
                <label htmlFor="taskName">Enter Title</label>
                <input type="text" name="taskName" id="" className='form-control' value={taskName} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="description">Enter Description</label>
                <textarea name="description" id="" rows="5" className='form-control' value={description} onChange={handleChange}></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default CreateTask;