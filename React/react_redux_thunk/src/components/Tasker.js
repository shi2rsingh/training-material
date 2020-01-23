import React from 'react';

class Tasker extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onInputChange(event) {
        this.setState({ input: event.target.value });
    }

    onAdd(event) {
        event.preventDefault();
        this.props.onAdd(this.state.input);
        this.setState({ input: '' });
    }

    render() {
        return (<div className="column">
            <form onSubmit={this.onAdd}>
                <input className="input is-rounded is-inline" value={this.state.input} onChange={this.onInputChange} type="text" />
                <button
                    className="button is-rounded is-primary"
                    type="submit"
                >Add</button>
            </form>

        </div>);
    }
}

export default Tasker;
