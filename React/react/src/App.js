import React from 'react';
import Tasker from './components/Tasker';
import TaskList from './components/TaskList';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: [
                { title: 'React', completed: false },
                { title: 'Redux', completed: false },
                { title: 'React-Redux', completed: false },
                { title: 'Assessment', completed: true }
            ]
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(values) {
        console.log({ values });

        this.setState((state) => ({
            taskList: [...state.taskList, { title: values, completed: false }]
        }));
    }

    onChange(index, type) {
        console.log(index, type);
        if (type === 'DONE') {
            this.setState((state) => {
                const array = [...state.taskList];
                array[index].completed = true;
                return { taskList: array }
            })
        }
        if (type === 'DELETE') {
            this.setState((state) => {
                const newList = state.taskList;
                newList.splice(index, 1);
                console.log({ newList });
                return { taskList: newList }
            })
        }
    }

    render() {
        return (
            <main>
                <section className="hero is-fullheight is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">My Today's Task</h1>
                            <div className="columns">
                                <Tasker onAdd={this.onSubmit} />
                                <TaskList
                                    list={this.state.taskList}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;
