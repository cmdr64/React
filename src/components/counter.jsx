import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        address: "bleh"
    };
    render() { 
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button onClick={this.state+=1}>ADD NUMBA</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state; //not sure what this does
        if( this.state.count === 0 )
            return <h1>Zero</h1>;
        else
            return this.state.count;
    }
}

export default Counter;