import React, { Component } from 'react'

export default class Todos extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group">
                                {this.props.todos.map((item, index) => (
                                    <li key={ index } className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>{item.text}</span>
                                        <div className="btn-group">
                                            <button className="btn btn-primary btn-sm">Complete</button>
                                            <button className="btn btn-warning btn-sm">Edit</button>
                                            <button onClick={ () => this.props.deleteTodo(index) } className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
