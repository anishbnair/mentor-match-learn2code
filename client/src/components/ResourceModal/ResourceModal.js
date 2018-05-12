import React from "react";
import {
  Button,
  Modal,
  OverlayTrigger,
  Popover,
  Tooltip
} from "react-bootstrap";
import ResourceList from "../ResourceList/ResourceList";
import "./ResourceModal.css";
import API from "../../utils/API";

export default class ResourceModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      resources: []
    };
  }

  loadResources = () => {
    API.showResourceList()
      .then(res => {
        const resources = Object.entries(res.data[0])
          .filter(([name, links]) => name === this.props.rscdetails.name)
          .reduce(
            (a, [name, { type: b }]) => (Array.isArray(b) ? [...a, ...b] : a),
            []
          );
        console.log("success with: ", this.props.rscdetails.name);
        console.log(res.data);
        console.log(resources);
        this.setState({ resources });
      })
      .catch(err => console.log("fail"));
  };

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.loadResources();
    console.log("this props name: ", this.props.rscdetails.name);
    this.setState({
      show: true
    });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover.such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        {/* <Button bsStyle = "primary" bsSize="small" onClick={this.handleShow}>Show Resources</Button> */}
        <img
          alt={this.props.rscdetails.name}
          src={this.props.rscdetails.image}
          onClick={this.handleShow}
        />

        <Modal
          className="modal"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Resources</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ResourceList list={this.state.resources} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}> Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
