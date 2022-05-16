import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        address: "bleh"
    };
    render() { 
        return (
            <React.Fragment>
                <h1>it's true</h1>
                <button>react be dumb</button>
            </React.Fragment>
        );
    }
}

export default Counter;