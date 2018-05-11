import React from 'react'; 
import {Button, Modal,OverlayTrigger,Popover,Tooltip} from 'react-bootstrap';
import ResourceList from "../ResourceList/ResourceList"
import "./ResourceModal.css";
import API from "../../utils/API";


  

export default class ResourceModal extends React.Component {
    
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    state = {
        resources: []
      };

    loadResources = () => {
        API.showResourceList()
          .then(res => {
            console.log("success");
            console.log(res.data);
            this.setState({ resources: res.data });
          })
          .catch(err => console.log("fail"));
      };

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: true
        });
        this.loadResources();
    }

    render() {
        const popover = ( 
            <Popover id="modal-popover"   title="popover">
            very popover.such engagement 
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
 
        return ( 
            <div>

            {/* <Button bsStyle = "primary" bsSize="small" onClick={this.handleShow}>Show Resources</Button> */}
            <img alt={this.props.image.name} src={this.props.image.image} onClick={this.handleShow} />

            <Modal className = "modal"show = {this.state.show} onHide = {this.handleClose} >
            <Modal.Header closeButton>
            <Modal.Title>Resources</Modal.Title> 
            </Modal.Header> 
            <Modal.Body>
            
            <ul className="resources">
              {(this.state.resources).map((key, index) => (
                <ResourceList
                  key={key._id}
                  index={key._id}
                  list={this.state.resources[index]}
                />
              ))}
            </ul>
                
            </Modal.Body> 
            <Modal.Footer >
            <Button onClick={this.handleClose}> Close</Button> 
            </Modal.Footer> 
            </Modal> 
            </div>
        );
    }
}