import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group">
                                {/* {this.props.todos.length > 0 &&
                                    
                                }
                                {this.props.todos.length === 0 && (
                                    <div className="text-center font-weight-bold">
                                        You don't have todos on the list!
                                    </div>
                                )} */}

                                {this.props.filtered ?
                                    this.props.filterTodos.map((todo) => (
                                        <Todo
                                            key={ todo.id }
                                            text={todo.text}
                                            isCompleted={todo.isCompleted}
                                            isEdit={todo.isEdit}
                                            index={todo.id}
                                            deleteTodo={this.props.deleteTodo}
                                            editTodo={this.props.editTodo}
                                            completeTodo={this.props.completeTodo}
                                        />
                                    ))
                                    :
                                    this.props.todos.map((todo) => (
                                        <Todo
                                            key={ todo.id }
                                            text={todo.text}
                                            isCompleted={todo.isCompleted}
                                            isEdit={todo.isEdit}
                                            index={todo.id}
                                            deleteTodo={this.props.deleteTodo}
                                            editTodo={this.props.editTodo}
                                            completeTodo={this.props.completeTodo}
                                        />
                                    ))
                                }


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todos;