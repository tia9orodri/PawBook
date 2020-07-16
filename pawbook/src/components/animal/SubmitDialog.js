import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import genreService from "../../services/animal";

export default class SubmitDialogComponent extends React.Component {
  toEdit = false;

  constructor(props) {
    super(props);
    this.toEdit = props.genre !== undefined;
    this.state = this.getFormState();
  }

  getFormState() {
    return this.toEdit
      ? { ...this.props.genre }
      : { nome: "", idade:"", localidade:"", distrito:"" };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.toEdit) {
      const { _id } = this.props.genre;
      genreService
        .update(_id, this.state)
        .then(() => this.props.submited({ ...this.state, _id }))
        .catch(ex => console.log(ex));
    } else {
      genreService
        .create(this.state)
        .then(result => this.props.submited({ ...this.state, _id: result._id }))
        .catch(ex => console.log(ex));
    }
  }

  handleCancel() {
    this.setState(this.getFormState());
    this.props.handleClose();
  }

  render() {
    const { show } = this.props;
    const { nome,idade,localidade, distrito } = this.state;

    return (
      <Modal show={show} onHide={this.handleCancel} size="lg">
        <Modal.Header>
          <Modal.Title>{this.toEdit ? "Edit genre" : "Create genre"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>idade</Form.Label>
              <Form.Control required true value={idade} onChange={(evt) => this.setState({ idade: evt.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>localidade</Form.Label>
              <Form.Control required true value={localidade} onChange={(evt) => this.setState({ localidade: evt.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>distrito</Form.Label>
              <Form.Control required true value={distrito} onChange={(evt) => this.setState({ distrito: evt.target.value })} />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleCancel()}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}