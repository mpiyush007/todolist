import React, { Component } from "react";
import "./TodoList.css";

import "axios";

import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            task: {
                title: "",
            },
        };

        this.taskTitleChangedHandler = this.taskTitleChangedHandler.bind(this);
        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.taskUpdateHandler = this.taskUpdateHandler.bind(this);
        this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
    }

    componentDidMount() {
        axios.post("/api/tasks", { user_id: userID }).then((response) => {
            this.setState({
                tasks: response.data.tasks,
            });
        });
    }

    taskTitleChangedHandler(event) {
        this.setState({
            task: {
                title: event.target.value,
            },
        });
    }

    // Handler for task addition.
    addTaskHandler(event) {
        event.preventDefault();

        let params = { title: this.state.task.title, done: 0, user_id: userID };

        axios.post("/api/task/add/", params).then((response) => {
            if (response.data.success) {
                axios
                    .post("/api/tasks", { user_id: userID })
                    .then((response) => {
                        this.setState({
                            tasks: response.data.tasks,
                            task: { title: "" },
                        });
                    });
            }
        });
    }

    taskUpdateHandler(event) {
        let id = event.currentTarget.getAttribute("id");
        let url = "/api/task/update/" + id;

        axios
            .post(url)
            .then((response) => {
                axios
                    .post("/api/tasks", { user_id: userID })
                    .then((response) => {
                        console.log(response.data);
                        this.setState({
                            tasks: response.data.tasks,
                        });
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteTaskHandler(event) {
        let id = event.currentTarget.getAttribute("id");
        let url = "/api/task/delete/" + id;

        axios
            .post(url)
            .then((response) => {
                axios
                    .post("/api/tasks", { user_id: userID })
                    .then((response) => {
                        this.setState({
                            tasks: response.data.tasks,
                        });
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="wrapper">
                <AddTaskForm
                    changed={this.taskTitleChangedHandler}
                    submitted={this.addTaskHandler}
                    title={this.state.task.title}
                />

                <TaskList
                    tasks={this.state.tasks}
                    marker={this.taskUpdateHandler}
                    delete={this.deleteTaskHandler}
                />
            </div>
        );
    }
}

export default TodoList;
