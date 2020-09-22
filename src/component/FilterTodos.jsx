import React, { Component } from 'react'

export default class FilterTodos extends Component {
    state = {
        value : ""
    }

    setFilter = (val) => {
        this.setState({
            value: val
        })
        this.props.filterAllTodos(val)
    }
    render() {
        return (
            <div className="row justify-content-center mb-2">
                <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Filter Todos</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={ (e) => this.setFilter(e.target.value) }
                        >
                            <option value="all">All</option>
                            <option value="completed">Complete</option>
                            <option value="notcomplete">Not Complete</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
