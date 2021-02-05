
import React from 'react';
import './AddTaskForm.css';

const addTaskForm = (props) => {
  
  return (
    
    <div className="formContainer">
      <div>
        <form className="form-inline" onSubmit={(event) => props.submitted(event)}>
          <div className="form-group">
            <input type="text" className="form-control" id="title" placeholder="Title..." onChange={(event) => props.changed(event)} required value={props.title} />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  
  );
  
}

export default addTaskForm;