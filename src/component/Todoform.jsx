import React, { Component } from 'react';

class Todoform extends Component {

    render() {
        return (
            <div className="row justify-content-center mb-2">
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={ this.props.addTodo }>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="input your todo here !"
                                        value={ this.props.value }
                                        onChange={ this.props.onChangeInput || this.props.edit }
                                        />
                                    <button className="float-right btn btn-primary btn-sm mt-2">Add Todo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todoform;