import React from 'react';
import {Modal, Button} from 'react-bootstrap';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faSquare, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import userService from '../../services/user';

export default class RemoveDialogComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {sure: false};
  }

  handleRemove () {
    userService.remove (this.props.userId)
    .then (() => {
      this.props.removed ();
    });
  }

  render () {
    const {show, handleClose} = this.props;
    const {sure} = this.state;
    return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Remove User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you proceed this action this element will be permenantly deleted from the system!
          <br />
          Are you sure?
          
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            disabled={!sure}
            onClick={() => this.handleRemove ()}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}