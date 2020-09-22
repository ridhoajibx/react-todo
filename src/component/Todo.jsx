import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        value: this.props.text
    }
    setValue = (id, val) => {
        this.setState({
            value: val
        })
        this.props.editTodo(id, val)
    }
    render() {
        return (
            <div>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {!this.props.isEdit ?
                        <>
                            { this.props.isCompleted === false ? 
                            <span>{this.props.text}</span> : 
                            <s>{this.props.text} <span role="img" aria-label="check" className="badge badge-success">✅</span></s>}
                            <div className="btn-group">
                                <button onClick={() => this.props.completeTodo(this.props.index)} className="btn btn-primary btn-sm">Complete</button>
                                <button onClick={() => this.props.editTodo(this.props.index)} className="btn btn-warning btn-sm">Edit</button>
                                <button onClick={() => this.props.deleteTodo(this.props.index)} className="btn btn-danger btn-sm">Delete</button>
                            </div>
                        </>
                        :
                        <>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                value={this.state.value}
                                onChange={(e) => this.setState({ value: e.target.value })}
                                autoFocus
                            />
                            <div className="btn-group">
                                <button type="submit" onClick={() => this.setValue(this.props.index, this.state.value)} className="btn btn-warning btn-sm">Change</button>
                            </div>
                        </>
                    }
                </li>
            </div>
        )
    }
}
