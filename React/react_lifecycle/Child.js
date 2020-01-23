import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('I am mounted');

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('I am updated');
        console.log('Previous State and Props', prevState, prevProps);
        console.log('Current State and Props', this.state, this.props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.count === 5) return false;
        return true
    }

    /* static getDerivedStateFromProps(nextProps, prevState) {
        console.log('I am going to updated');
        console.log('Coming prevState and nexProps', prevState, nextProps);
        return { count: nextProps.count + 5 };

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Taking SnapShot');
        console.log('Previous State and Props', prevState, prevProps);
    } */

    componentWillUnmount() {
        console.log('I am going to unmount');

    }

    render() {
        return (<h1> Child Rendered </h1>);
    }
}

export default Child;
