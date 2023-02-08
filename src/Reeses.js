import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Reeses.css";

function Reeses() {
    return (
        <div className="Reeses">
            <Message>
                <h1>According to various reports and surveys, <br />
                the most popular candy in the United States is Reese's Peanut Butter Cups.<br />
                This classic chocolate and peanut butter candy has been a favorite among American consumers for many years,<br />
                and it consistently ranks at the top of lists of the most popular candies in the country.</h1>
                <h1><Link to="/">Return to Vending Machine.</Link></h1>
            </Message>
        </div>
    )
}

export default Reeses;