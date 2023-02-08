import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Twizzlers.css";

function Twizzlers() {
    return (
        <div className="Twizzlers">
            <Message>
                <h1>Twizzlers were created in 1845 by a young candy maker named Young & Smylie.<br />
                 They were originally marketed as a licorice-flavored treat for adult consumers.<br />
                 However, it wasn't until the 1950s that the brand really took off.</h1>
                <h1><Link to="/">Return to Vending Machine.</Link></h1>
            </Message>
        </div>
    )
}

export default Twizzlers;