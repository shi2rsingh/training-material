import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, doneTodo, deleteTodo } from '../actions/todoAction';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'ALL'
        }
    }


    render() {
        const pendingList = this.props.list.filter((item) => !item.completed);
        const completedList = this.props.list.filter((item) => item.completed);
        let renderList = [];
        switch (this.state.status) {
            case 'PENDING': renderList = pendingList; break;
            case 'COMPLETED': renderList = completedList; break;
            case 'ALL': renderList = this.props.list;
            default: renderList = this.props.list;
        };

        return (<div className="column">
            <div className="buttons has-addons is-centered">
                <button className="button" onClick={() => this.setState({ status: 'ALL' })}>All</button>
                <button className="button" onClick={() => this.setState({ status: 'PENDING' })}>Pending</button>
                <button className="button" onClick={() => this.setState({ status: 'COMPLETED' })}>Completed</button>
            </div>
            <ul className="list">
                {
                    renderList.map((item, index) => (
                        <li key={index} className="list-item">
                            <div className="columns">
                                <div className="column is-two-third" style={item.completed ? { textDecoration: 'line-through' } : {}}>{item.title}</div>
                                <div className="column">
                                    <div className="buttons are-small is-pulled-right">
                                        {!item.completed && <button onClick={() => this.props.doneTodo(this.props.list.findIndex(x => x.title === item.title))} className="button is-primary is-outlined">
                                            Done
    </button>}
                                        <button onClick={() => this.props.deleteTodo(this.props.list.findIndex(x => x.title === item.title))} className="button is-danger is-outlined">
                                            Delete
    </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        );
    }
}


function mapStateToProps(store) {
    return {
        list: store.todo.taskList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        doneTodo: function (value) {
            dispatch(doneTodo(value))
        },
        deleteTodo: function (value) {
            dispatch(deleteTodo(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
