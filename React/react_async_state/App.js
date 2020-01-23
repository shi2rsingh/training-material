import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        this.abuttonExample = this.abuttonExample.bind(this);
        this.buttonExample = this.buttonExample.bind(this);
    }

    abuttonExample() {
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
    }

    buttonExample() {
        this.setState((state) => ({ count: state.count + 1 }));
        this.setState((state) => ({ count: state.count + 1 }));
        this.setState((state) => ({ count: state.count + 1 }));
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.abuttonExample}>Button 1</button>
                <button onClick={this.buttonExample}>Button 2</button>
            </>
        );
    }
}

export default App;
