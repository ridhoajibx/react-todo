import React, { Component } from 'react';
import Header from "../component/Header";
import SortTodos from '../component/SortTodos';
import Todoform from "../component/Todoform";
import Todos from "../component/Todos";

export default class Todolist extends Component {
    state = {
        todos: [
            {
                text: "Todo item 1",
                isCompleted: false,
                edit: false
            },
            {
                text: "Todo item 2",
                isCompleted: false,
                edit: false
            },
            {
                text: "Todo item 3",
                isCompleted: false,
                edit: false
            },
            {
                text: "Todo item 4",
                isCompleted: true,
                edit: false
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
                    isCompleted: false,
                    edit:false
                }
            ]
        });
    }

    editTodo = (val, i) => {
        const todo = this.state.todos;
        if (val == null) {
            todo[i].edit = true
        } else {
            todo[i].edit = false
            todo[i].text = val
        }
        this.setState({ todos: todo })
    }

    // setEditTodo = (i, newTodo) => {
    //     const todo = this.state.todos;
    //     todo.splice(i, 1, {
    //         ...todo[i],
    //         text: newTodo,
    //     });
    // }

    completeTodo = (i) => {
        const todo = this.state.todos;
        // console.log(todo[i].isCompleted);
        if (todo[i].isCompleted === false) {
            todo[i].isCompleted = true;
        } else {
            // alert(`todo ${todo[i].text} has been completed !`)
            todo[i].isCompleted = false;
        }
        this.setState({ todos: todo })
    } 

    sortTodos = () => {
        const todo = this.state.todos;
        todo.sort(function(a, b) {
            return (a.isCompleted - b.isCompleted);
        });
        // console.log(todo);
        this.setState({ todos: todo })
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

                    <SortTodos sortTodos={ this.sortTodos } />

                    <Todos 
                        todos={this.state.todos} 
                        deleteTodo={this.deleteTodo} 
                        editTodo={ this.editTodo }
                        completeTodo={ this.completeTodo }
                    />
                </div>
            </div>
        )
    }
}