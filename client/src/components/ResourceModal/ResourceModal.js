import React from 'react'; 
import {Button, Modal,OverlayTrigger,Popover,Tooltip} from 'react-bootstrap';
import "./ResourceModal.css";
import ResourceCard from "../ResourcesCards/ResourcesCards";



export default class ResourceModal extends React.Component {
    
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    render() {
        const popover = ( 
            <Popover id="modal-popover"   title="popover">
            very popover.such engagement </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return ( 
            <div>

            <Button bsStyle = "primary" bsSize="small" onClick={this.handleShow}>Show Resources</Button>

            <Modal className = "modal"show = {this.state.show} onHide = {this.handleClose} >
            <Modal.Header closeButton>
            <Modal.Title>Resources</Modal.Title> 
            </Modal.Header> 
            <Modal.Body>
            
           {/*  List of resources goes here */}
            </Modal.Body> 
            <Modal.Footer >
            <Button onClick={this.handleClose}> Close</Button> 
            </Modal.Footer> 
            </Modal> 
            </div>
        );
    }
}