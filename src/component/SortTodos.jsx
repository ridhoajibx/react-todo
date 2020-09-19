import React, { Component } from 'react';

class SortTodos extends Component {

    render() {
        return (
            <div className="row justify-content-center mb-2">
                <button onClick={ () => this.props.sortTodos() } className="btn btn-sm btn-secondary">Sort complete</button>
            </div>
        );
    }
}

export default SortTodos;