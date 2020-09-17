import React, { Component } from 'react';
import Header from "../component/Header";
import Todoform from "../component/Todoform";
import Todos from "../component/Todos";

export default class Todolist extends Component {
    state = {
        todos: [
            {
                text: "Todo item 1",
                isCompleted: false
            },
            {
                text: "Todo item 2",
                isCompleted: false
            },
            {
                text: "Todo item 3",
                isCompleted: false
            },
            {
                text: "Todo item 4",
                isCompleted: true
            }
        ]
    }

    addTodo = (e, value) => {
        e.preventDefault();
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    text: value,
                    isCompleted: false
                }
            ]
        });
    }

    editTodo = (i, value) => {
        const todo = this.state.todos;
        if (todo[i].isCompleted === true) {
            alert(`todo ${todo[i].text} has been completed`);
        } else {
            value = todo[i].text
            console.log(value);
        }
    }

    deleteTodo = (index) => {
        const todo = this.state.todos;
        todo.splice(index, 1);
        this.setState({ todos: todo })
    }
    render() {
        return (
            <div>
                <div className="container py-4">
                    <Header />

                    <Todoform addTodo={this.addTodo} />

                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={ this.editTodo } />
                </div>
            </div>
        )
    }
}