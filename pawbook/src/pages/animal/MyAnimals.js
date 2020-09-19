import React from "react";
import services from "../../services";
import { Container,Button,Alert, Card } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import SubmitDialogComponent from "../../components/animal/SubmitDialog";
import SearchFormComponent from "../../components/global/SearchForm";
import AnimalCard from "../../components/animal/AnimalCard";
import bobby from "../../assets/Bobby.jpg";
import "./Animal.css";


export default class MyAnimals extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    //define props todas vazias excepto o role
    this.state = {
      animals: [],
      error: undefined,
      newAnimal: false,
    };
  }

  componentDidMount() {
    //meter com query string para dar apenas os meus
    this.getList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname != prevProps.location.pathname) {
      this.getList();
    }
  }


  //é preciso ver como funciona o searchtext para procurar apenas os animais da pessoa que temos em session storage
  getList(searchText) {
    if (this.props.location.pathname === "/animal/myAnimals")
      services.animal
        .getAll(searchText)
        .then((value) => this.setState({ animals: value }))
        .catch((err) => this.setState({ error: err }));
  }



  render() {
    const { animals, error, newAnimal } = this.state;

    return (
      <Container id="myanimalsContainer">
        {error != undefined && <Alert variant="danger">error</Alert>}

        <div id="myanimals">
        {animals.map((animal, index) => (
            <Card class="carta" key={`animal${index}`}>
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

            </Card>))}
        </div>

      </Container>
    );
  }
}