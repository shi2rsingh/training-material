import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1, isChildShown: false };
        this.addCount = this.addCount.bind(this);
        this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
    }

    addCount() {
        this.setState((state) => ({ count: state.count + 1 }));
    }

    toggleChildVisibility() {
        this.setState((state) => ({ isChildShown: !state.isChildShown }))
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount}>Increment</button>
                <button onClick={this.toggleChildVisibility}>{this.state.isChildShown ? 'Hide Child' : 'Show Child '}</button>
                <h2>Below Child Component will come</h2>
                <hr />
                {this.state.isChildShown ? <Child count={this.state.count} /> : ''}

            </>
        );
    }
}

export default App;
