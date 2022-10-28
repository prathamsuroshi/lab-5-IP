import React from "react"
import  "./MyDetail.css"
import Image from "./photo2.png"

function MyDetail(props) {
    function eventHandler(){
        alert('This is my Profile Page');
    }
    return(
        <div className="container">
            <div className="mydetail">
                <div className="info">
                    <div className="img-wel">
                    <div className="img">
                        <img src={Image} alt="img"/>
                    </div>
                    <div className="welcome">
                        <h2>Welcome to my profile page</h2>
                        <button onClick={eventHandler}>Click for Info!</button>
                    </div>
                    </div>
                    <div className="detail">
                        <h2>Personal Detail</h2>
                        <p>Name :<b>{props.name}</b></p>
                        <p>Mobile number : {props.mobile}</p>
                        <p>DOB : {props.Dob}</p>
                        <p>Email Address : {props.email}</p>
                        <p>Address : Chembur, Mumbai , Maharashtra, India</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MyDetail