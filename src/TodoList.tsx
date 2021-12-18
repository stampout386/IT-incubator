import React from "react";
import {TodoListArrayType} from "./App";

type TodoListPropsType = {
    title: string,
    task: Array<TodoListArrayType>,

}

function TodoList(props: TodoListPropsType) {
    return (
        <div>
            <div>{props.title}</div>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.task[0].isDone}/>{props.task[0].title}</li>
                <li><input type="checkbox" checked={props.task[1].isDone}/>{props.task[1].title}</li>
                <li><input type="checkbox" checked={props.task[2].isDone}/>{props.task[2].title}</li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList