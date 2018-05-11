import React from "react";
import "./ResourcesCards.css";
import ResourceModal from "../ResourceModal/ResourceModal";


const ResourceCard = props => (

    <div className="resources">
        <ResourceModal
            image={{
                image: props.image,
                name: props.name
            }}
        />
    </div>
);


export default ResourceCard;

