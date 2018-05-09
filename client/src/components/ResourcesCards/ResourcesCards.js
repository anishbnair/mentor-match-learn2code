import React from "react";
import {Panel, Button} from 'react-bootstrap';
import "./ResourcesCards.css";
import ResourceModal from "../ResourceModal/ResourceModal";


const ResourceCard= props=> (

        <div>
            <Panel className="tech-cards">
                <Panel.Body><img alt={props.name} src={props.image} /></Panel.Body>
                <ResourceModal />
                {/* <Panel.Footer><Button bsStyle="primary">Resources</Button></Panel.Footer> */}
            </Panel>    
        </div>
    );


export default ResourceCard; 