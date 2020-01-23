import React from 'react';
import Tasker from './components/Tasker';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import { addTodo, doneTodo, deleteTodo, magicTodo } from './actions/todoAction';


class App extends React.Component {

    constructor(props) {
        super(props);
        /* this.state = {
            taskList: [
                { text: 'React', completed: false },
                { text: 'Redux', completed: false },
                { text: 'React-Redux', completed: false },
                { text: 'Assessment', completed: true }
            ],
            activeItem: ''
        } */
        this.onSubmit = this.onSubmit.bind(this);
        /* this.onChange = this.onChange.bind(this); */
    }

    onSubmit(values) {
        console.log({ values });
        //this.props.addTodo(values);
        this.props.magicTodo(values);
        /*  this.setState((state) => ({
             taskList: [...state.taskList, { text: values, completed: false }]
         })); */
    }

    /* onChange(index, type) {
        console.log(index, type);
        if (type === 'DONE') {
            this.props.doneTodo(index);
            this.setState((state) => {
                const array = [...state.taskList];
                array[index].completed = true;
                return { taskList: array }
            })
        }
        if (type === 'DELETE') {
            this.props.deleteTodo(index);
            this.setState((state) => {
                const newList = [...state.taskList.splice(0, index), ...state.taskList.splice(index + 1, state.taskList.length)]
                console.log({ newList });
                return { taskList: newList }
            })
        }
    } */

    render() {
        return (
            <main>
                <section className="hero is-fullheight is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">My Today's Task</h1>
                            <div className="columns">
                                <Tasker onAdd={this.onSubmit} />
                                <TaskList />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

function mapStateToProps(store) {
    return {
        taskList: store.todo.taskList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: function (value) {
            dispatch(addTodo(value))
        },
        magicTodo: function (value) {
            dispatch(magicTodo(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
