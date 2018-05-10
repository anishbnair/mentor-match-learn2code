import React, { Component } from "react"; 


class ResourceList extends Component { 
    render() {
        const url = this.props.list;
        
        return (
            <div className="container">
                <ul className="res-list">
                    <li>
                        <a href={url} target="_blank"></a>
                    </li>
                </ul>
            </div>
        );
   }
}

export default ResourceList; 