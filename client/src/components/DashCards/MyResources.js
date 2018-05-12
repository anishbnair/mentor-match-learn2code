import React from "react";
import "./DashCards.css";


class Resources extends React.Component {
    //add state 
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">My Resources</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="myResourcesList">
                            <li><a href="https://www.w3schools.com/html/">https://www.w3schools.com/html</a></li>
                            <li><a href="https://www.onblastblog.com/css3-cheat-sheet/">https://www.onblastblog.com/css3-cheat-sheet/</a></li>
                            <li><a href="https://docs.mongodb.com/manual/introduction/">https://docs.mongodb.com/manual/introduction/</a></li>
                            <li><a href="http://html5gallery.com/">http://html5gallery.com/</a></li>
                            <li><a href="https://csswizardry.com/">https://csswizardry.com/</a></li>
                            <li><a href="https://university.mongodb.com/">https://university.mongodb.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resources;

