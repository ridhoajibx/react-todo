import React, { Component } from 'react';
import Header from "../component/Header";
import SortTodos from '../component/SortTodos';
import FilterTodos from "../component/FilterTodos";
import Todoform from "../component/Todoform";
import Todos from "../component/Todos";

export default class Todolist extends Component {
    state = {
        todos: [],
        input: "",
        isCompleted: false,
        isEdit: false,
        filterTodos: [],
        filtered: false,
    }

    componentDidMount() {
        this.getStorage()
    }


    componentDidUpdate() {
        this.setStorage();
    }

    onChangeInput = (e) => {
        e.preventDefault();
        this.setState({
            input: e.target.value,
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        this.setState({
            todos: [...this.state.todos,
            {
                text: this.state.input,
                isCompleted: this.state.isCompleted,
                isEdit: this.state.isEdit
            }
            ],
            input: ""
        });
    }

    editTodo = (i, val) => {
        let todos = this.state.todos;
        if (todos[i].isEdit === false) {
            todos[i].isEdit = true;
            todos[i].text = val
        } else {
            todos[i].isEdit = false;
            todos[i].text = val
        }
        this.setState({ todos: todos })
    }

    deleteTodo = (i) => {
        let todos = this.state.todos;
        todos.splice(i, 1);
        this.setState({ todos: todos })
    }

    completeTodo = (i) => {
        let todo = this.state.todos;
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
        let todos = this.state.todos;
        todos.sort(function (a, b) {
            return (a.isCompleted - b.isCompleted);
        });
        // console.log(todo);
        this.setState({ todos: todos })
    }

    filterAllTodos = (val) => {
        let filter = []
        if (val === "completed") {
            filter = this.state.todos.filter((todos) => (todos.isCompleted === true)); //filter disini
            this.setState({ 
                filterTodos: filter, 
                filtered: true
            });
        } else if (val === "notcomplete") {
            filter = this.state.todos.filter((todos) => (todos.isCompleted === false));
            this.setState({ 
                filterTodos: filter, 
                filtered: true
            });
        } else if (val === "all") {
            this.setState({ 
                filterTodos: filter, 
                filtered: false
            });
        }
        console.log(filter);
        //kalo sudah di filter tampilin state filteredTodo bukan todo
    }

    getStorage = () => {
        let storageTodo = JSON.parse(localStorage.getItem("todos"));
        if (!storageTodo) {
            storageTodo = [];
        }
        this.setState({ todos: storageTodo })
    }

    setStorage = () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    };

    render() {
        return (
            <div>
                <div className="container py-4">
                    <Header />

                    <Todoform
                        value={this.state.input}
                        addTodo={this.addTodo}
                        onChangeInput={this.onChangeInput}
                        edit={this.props.setValue}
                    />

                    <FilterTodos filterAllTodos={this.filterAllTodos} />

                    <SortTodos sortTodos={this.sortTodos} />

                    <Todos
                        todos={this.state.todos}
                        deleteTodo={this.deleteTodo}
                        editTodo={this.editTodo}
                        completeTodo={this.completeTodo}
                        filterTodos={ this.state.filterTodos }
                        filtered={ this.state.filtered }
                    />
                </div>
            </div>
        )
    }
}