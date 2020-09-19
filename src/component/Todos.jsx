import React, { Component } from 'react'

export default class Todos extends Component {
    state = {
        value: "",
    }

    edit(val, i){
        this.setState({
            value:val
        })
        this.props.editTodo(null, i)
        // console.log(val);
    }

    completeTask(index) {
        this.setState({
            index
        })
        this.props.completeTodo(index)
        console.log(index);
    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group">
                                {this.props.todos.map((todo, index) => (
                                    <li key={ index } className="list-group-item d-flex justify-content-between align-items-center">
                                        {!todo.edit ?
                                            <>
                                              { todo.isCompleted === false ? <span>{todo.text}</span> : <s>{todo.text} <span role="img" aria-label="check" className="badge badge-success">✅</span></s>}
                                                <div className="btn-group">
                                                    <button onClick={ () => this.completeTask(index) } className="btn btn-primary btn-sm">Complete</button>
                                                    <button onClick={ () => this.edit(todo.text, index) } className="btn btn-warning btn-sm">Edit</button>
                                                    <button onClick={ () => this.props.deleteTodo(index) } className="btn btn-danger btn-sm">Delete</button>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <input 
                                                    className="form-control form-control-sm" 
                                                    type="text" 
                                                    value={ this.state.value } 
                                                    onChange={ (e) => this.setState({ value: e.target.value }) } 
                                                    autoFocus
                                                />
                                                <button onClick={ () => this.props.editTodo( this.state.value, index ) } className="btn btn-warning btn-sm ml-2">Change</button>
                                            </>
                                        }
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
