import React from "react"
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <Message>
                <h1>Please select a candy from the vending machine.</h1>
            </Message>
            <Message>
                <h1><Link to="/Reeses">Reeses</Link></h1>
                <h1><Link to="/Skittles">Skittles</Link></h1>
                <h1><Link to="/Twizzlers">Twizzlers</Link></h1>
            </Message>
        </div>
    );
}

export default VendingMachine; 

