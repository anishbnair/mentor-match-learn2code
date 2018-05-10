import React from 'react';
import { Button, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import "./Modal.css";
import Form from "../Form/Form.js"

export default class Interests extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Button bsStyle="primary" bsSize="medium" onClick={this.handleShow}>
          Choose your Path
        </Button>

        <Modal className="modal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Choose your Path</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form auth={this.props.auth}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


