import React from "react";
import "./Task.css";

const task = (props) => {
    return (
        <div
            className={props.done ? "task done" : "task"}
            id={props.id}
            title={props.done ? null : "Click to mark as done."}
        >
            <div
                className="task-container"
                onClick={(event) => props.clicked(event)}
                id={props.id}
            >
                <i className="glyphicon glyphicon-ok check-mark"></i>
                <p>{props.title}</p>
            </div>

            <div
                className="close-btn-container"
                title="Click to delete."
                id={props.id}
                onClick={(event) => props.deleteTask(event)}
            >
                <i className="glyphicon glyphicon-remove remove-mark"></i>
            </div>
        </div>
    );
};

export default task;
