import React from "react";
import services from "../../services";
import { Container, Button, Form, Card } from "react-bootstrap";
import RangeSlider from "react-rangeslider";
import AuthContext from "../../configs/authContext";
import SubmitDialogComponent from "../../components/animal/SubmitDialog";
import SearchFormComponent from "../../components/global/SearchForm";




export default class EditAnimal extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id.substring(3),
      nome: "",
      tipo: "Cao",
      idade: "",
      raca: "",
      localidade: "",
      observacoes: "",
      anunciante: ""
    };
    this.getAnimal();
  }

  componentDidMount() {
    //this.addAnimal();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname != prevProps.location.pathname) {
      this.getList();
    }
  }

  getAnimal(){
    let stringAux = this.state.id;
    stringAux = stringAux.substring();
    services.animal.getOne(this.state.id).then((response) => {
      this.setState({ nome: response.nome, tipo: response.tipo, 
                      idade: response.idade, raca: response.raca,
                      localidade: response.localidade, observacoes: response.observacoes,
                      anunciante: response.anunciante })
  }).catch((err) => {

  });
  }

  updateAnimal() {
    services.animal.create(this.state);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    services.animal.update(this.state.id,this.state).then(() => {
      this.props.history.push("/animal/myAnimals");
    });
  }

  render() {

    return (
      <Container>
        <Card style={{ width: "18rem" }}>
          <Form onSubmit={(evt) => this.handleSubmit(evt)}>
            <Card.Body>
              <Card.Title>Dados do animal</Card.Title>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  required true
                  value={this.state.nome}
                  onChange={(evt) => this.setState({ nome: evt.target.value })} />
              </Form.Group>
              
              <Form.Group>
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.tipo}
                  onChange={(evt) => this.setState({ tipo: evt.target.value })}>
                  <option value={"Cao"}>Cao</option>
                  <option value={"Gato"}>Gato</option>
                  <option value={"Outro"}>Outro</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Idade</Form.Label>
                <Form.Control
                  required true
                  value={this.state.idade}
                  onChange={(evt) => this.setState({ idade: evt.target.value })} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Raça</Form.Label>
                <Form.Control
                  required true
                  value={this.state.raca}
                  onChange={(evt) => this.setState({ raca: evt.target.value })} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Localidade</Form.Label>
                <Form.Control
                  required true
                  value={this.state.localidade}
                  onChange={(evt) => this.setState({ localidade: evt.target.value })} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Observações</Form.Label>
                <Form.Control
                  as="textarea"
                  rows = "5"
                  required true
                  value={this.state.observacoes}
                  onChange={(evt) => this.setState({ observacoes: evt.target.value })} />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Editar Animal
              </Button>
            </Card.Body>
          </Form>
        </Card>
      </Container>
    );
  }
}