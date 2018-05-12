import React from "react";
import "./DashCards.css";


class PrevConnect extends React.Component {
    //add state 
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">My Connections</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="MyConnectionsList">
                            <li>Name: John Doe</li>
                            <li>Email: john.doe@gmail.com</li>
                            <hr/>
                            <li>Name: Jane Doe</li>
                            <li>Email: jane.doe@gmail.com</li>
                            <hr/>
                            <li>Name: Jane Haux</li>
                            <li>Email: Jane.H@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default PrevConnect;

