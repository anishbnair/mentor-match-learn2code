import React from "react";
import {Panel, Button} from 'react-bootstrap';
import "./ResourcesCards.css";
import ResourceModal from "../ResourceModal/ResourceModal";


const ResourceCard= props=> (

        <div className="resources">
            <img alt={props.name} src={props.image}/>
            <ResourceModal />   
        </div>
    );


export default ResourceCard; 

