import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Skittles.css";

function Skittles() {
    return (
        <div className="Skittles">
            <Message>
                <h1>Skittles were first introduced in the UK in 1974 by a company called Mars.<br />
                 They were initially marketed as a hard candy with a fruity flavor and a colorful, sugar-coated exterior.</h1>
                <h1><Link to="/">Return to Vending Machine.</Link></h1>
            </Message>
        </div>
    )
}

export default Skittles;