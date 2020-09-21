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
                            {this.props.todos.length > 0 &&
                                this.props.todos.map((todo, index) => {
                                return (
                                    <Todo
                                    key={ index }
                                    text={todo.text}
                                    isCompleted={todo.isCompleted}
                                    isEdit={ todo.isEdit }
                                    index={index}
                                    deleteTodo={ this.props.deleteTodo }
                                    editTodo={ this.props.editTodo }
                                    completeTodo={ this.props.completeTodo }
                                    />
                                );
                                })}
                            {this.props.todos.length === 0 && (
                                <div className="text-center font-weight-bold">
                                    You don't have todos on the list!
                                </div>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todos;