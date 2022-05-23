
//react
import React from 'react';
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";

//third party
import 'bootstrap/dist/css/bootstrap.css'

//my components
import ParkingTable from './components/parkingTable'
import App from './components/app';

//lets do it
const root = createRoot( document.getElementById('root') );
root.render( <App /> );