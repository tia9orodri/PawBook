import React from "react";
import services from "../../services";
import { Container, Button, Alert, Card, ResponsiveEmbed } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import SubmitDialogComponent from "../../components/animal/SubmitDialog";
import SearchFormComponent from "../../components/global/SearchForm";
import AnimalCard from "../../components/animal/AnimalCard";
import "./Animal.css";

export default class AnimalListPage extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    //define props todas vazias excepto o role
    this.state = {
      animals: [],
      error: undefined,
      
    };
  }

  componentDidMount() {
    this.getList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname != prevProps.location.pathname) {
      this.getList();
    }
  }


  getList(searchText) {
    if (this.props.location.pathname === "/animal/list")
      services.animal
        .getAll(searchText)
        .then((value) => this.setState({ animals: value }))
        .catch((err) => this.setState({ error: err }));
  }

  getContacto(id) {
    const dados = services.auth.getOne(id)
      .then((response) => {
        return  response.email 

      }).catch((err) => {

      });
      return dados;
  }
  getNomeAnunciante(id) {
    const dados = services.auth.getOne(id)
      .then((response) => {
        return  response.nome

      }).catch((err) => {

      });
      return dados;
  }
  



  render() {
    const { animals, error, newAnimal } = this.state;

    return (
      <Container>
        {error != undefined && <Alert variant="danger">error</Alert>}

        <div id="animalList">
          {animals.map((animal, index) => (
            <Card key={`animal${index}`}>
              <Card.Body>
                <Card.Title>{animal.nome}</Card.Title>
                <Card.Subtitle>Animal: {animal.tipo}</Card.Subtitle>
                <Card.Subtitle>Espécie: {animal.especie}</Card.Subtitle>
                <Card.Subtitle>Raça: {animal.raca}</Card.Subtitle>
                <Card.Subtitle>Idade: {animal.idade}</Card.Subtitle>
                <Card.Subtitle>Localidade: {animal.localidade}</Card.Subtitle>
                <Card.Text>Observações: {animal.observacoes}</Card.Text>
                  
              </Card.Body>
              <Card.Img src={animal.Img} variant="left"></Card.Img>
              <Button variant="primary" type="submit" block>
                Contactos
              </Button>
            </Card>))
          }
        </div>

      </Container>
    );
  }
}