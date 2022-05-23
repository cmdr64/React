
import React, { Component } from 'react'; 

class ParkingTable extends Component {

    createRow( vehicle, curbSpot, enterTime, exitTime ) {
        return {vehicle: vehicle,
                curbSpot: curbSpot,
                enterTime: enterTime,
                exitTime: exitTime };
    }

    state = {
        rows: [this.createRow('red subaru legacy', '1', '12/1/2022 12:30 pm CST', '12/1/2022 12:45 pm CST'),
               this.createRow('blue toyota',       '2', '12/1/2022 12:50 pm CST', '12/1/2022 3:00 pm CST'),
               this.createRow('blue toyota',       '3', '12/1/2022 12:55 pm CST', '12/1/2022 6:00 pm CST')]
    };

    render() {
        const listItems = this.state.rows.map( ({vehicle, curbSpot, enterTime, exitTime}) =>
            <>
                <tr>
                    <td className="col-md-auto">{vehicle}</td>
                    <td className="col-md-auto">{curbSpot}</td>
                    <td className="col-md-auto">{enterTime}</td>
                    <td className="col-md-auto">{exitTime}</td>
                    <td className="col-md-auto" width="1"><button className='btn btn-primary'>edit</button></td>
                    <td className="col-md-auto" width="1"><button className='btn btn-danger'>del</button></td>
                </tr>
            </>
        );
        return (
            <table className="table w-auto table-striped">
                <thead>
                    <tr>
                        <td className="col-md-auto">Vehicle</td>
                        <td className="col-md-auto">Curb Spot</td>
                        <td className="col-md-auto">Park Time</td>
                        <td className="col-md-auto">Depart Time</td>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
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

export default ParkingTable;