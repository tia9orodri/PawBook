import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import animalService from "../../services/animal";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";

export default class SubmitDialogComponent extends React.Component {
  toEdit = false;

  constructor(props) {
    super(props);
    this.toEdit = props.animal !== undefined;
    this.state = this.getFormState();
  }

  getFormState() {
    return this.toEdit
      ? {form:this.props.animal}
      : { form: {nome: "",tipo:"", idade:"",raca:"", localidade:"", observacoes:""} };
  }



  handleSubmit(evt) {
    evt.preventDefault();
    if (this.toEdit) {
      const { _id } = this.props.animal;
      animalService
        .update(_id, this.state)
        .then(() => this.props.submited({ ...this.state, _id }))
        .catch(ex => console.log(ex));
    } else {
      animalService
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
    const tipos= ["Cão", "Gato"];
    const { nome,tipo,idade,raca, localidade, observacoes } = this.state;

    return (
      <Modal show={show} onHide={this.handleCancel} size="lg">
        <Modal.Header>
          <Modal.Title>{this.toEdit ? "Edit Animal" : "Create Animal"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control required true value={nome} onChange={(evt) => this.setState({ nome: evt.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tipo</Form.Label>
              <Form.Control
               as="select" 
               value= {tipo}
               value={tipo} onChange={(evt) => this.setState({ tipo: evt.target.value })} >
                 <option value='0'>Escolhe um tipo</option>
                 {this.state.tipos.map((tipo) =>
                  <option key={tipo._id} value={tipos.tipo}>{tipos.tipo}</option>)}

               </Form.Control>
               
            </Form.Group>

            <Form.Group>
              <Form.Label>idade</Form.Label>
              <Form.Control required true value={idade} onChange={(evt) => this.setState({ idade: evt.target.value })} />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>raca</Form.Label>
              <Form.Control required true value={raca} onChange={(evt) => this.setState({ raca: evt.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>localidade</Form.Label>
              <Form.Control required true value={localidade} onChange={(evt) => this.setState({ localidade: evt.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>observacoes</Form.Label>
              <Form.Control required true value={observacoes} onChange={(evt) => this.setState({ observacoes: evt.target.value })} />
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