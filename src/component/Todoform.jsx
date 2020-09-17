import React, { Component } from 'react';


export default class Todoform extends Component {
    state = {
        input: ""
    }
    setInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <div className="row justify-content-center mb-2">
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={ (e) => this.props.addTodo(e, this.state.input) }>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="input your todo here !"
                                        name="todo"
                                        value={ this.state.input }
                                        onChange={ (e) => this.setInput(e)  }
                                        />
                                    <button className="float-right btn btn-primary btn-sm mt-2">Add Todo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
