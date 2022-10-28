import React from "react";
import {
    Link,
} from "react-router-dom";
import "./Navbar1.css"

const Navbar1 = (props) => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="name">
                    <a id="title" href="/"><h2 className="name1">My profile</h2></a>
                </div>
                <div className="nav1">
                    <li className="nav2"> <Link to="/" className="nav">Home</Link></li>
                    <li className="nav2"> <Link to="/Myskills" className="nav">My Skills</Link></li>
                    <li className="nav2"> <Link to="/Myedu" className="nav">My Education</Link></li>
                </div>
            </div>
        </div>


    );
}

export default Navbar1;