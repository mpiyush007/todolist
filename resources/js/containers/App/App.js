import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "../TodoList/TodoList";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <TodoList />
            </div>
        );
    }
}

if (document.getElementById("todolist")) {
    ReactDOM.render(<App />, document.getElementById("todolist"));
}
