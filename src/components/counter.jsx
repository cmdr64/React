import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        address: "bleh"
    };
    render() { 
        return (
            <React.Fragment>
                <h1>reacto presto</h1>
                <button>increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;