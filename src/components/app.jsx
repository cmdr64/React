
import React, {Component} from 'react'
import ParkingTable from './parkingTable';

class App extends React.Component {

    render() {
    const s = ( //do not 'fix' indentation of the V
`    %%%%%%%       %%%%%%%%*
    %%%%%%%     .%%%%%%%%
    %%%%%%%    #%%%%%%%/
    %%%%%%%   %%%%%%%%
    %%%%%%  (%%%%%%%(
    %%%%%  %%%%%%%%
    %%%. ,%%%%%%%#
    %%  %%%%%%%%
    , .%%%%%%%%
    %%%%%%%%`);

        return (
            <>
            <pre>{s}</pre>
            <ParkingTable />
            </>
        );
    }
}

export default App;