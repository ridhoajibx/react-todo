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
                isCompleted: false
            }
        ]
    }

    submitHandler = (e, value) => {
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

    deleteTodo = (index) => {
        const newState = this.state.todos;
        newState.splice(index, 1);
        this.setState({ todos: newState })
        // console.log(newState);
    }
    render() {
        return (
            <div>
                <div className="container py-4">
                    <Header />

                    <Todoform submitHandler={this.submitHandler} changeHandler={ this.changeHandler } />

                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                </div>
            </div>
        )
    }
}