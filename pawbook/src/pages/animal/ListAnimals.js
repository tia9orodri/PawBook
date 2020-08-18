import React from "react";
import services from "../../services";
import { Container,Button,Alert, Card } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import SubmitDialogComponent from "../../components/animal/SubmitDialog"
import SearchFormComponent from "../../components/global/SearchForm"



export default class AnimalListPage extends React.Component {
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



  render() {
    const { animals, error, newAnimal } = this.state;

    return (
      <Container>
        {error != undefined && <Alert variant="danger">error</Alert>}

        <div id="animalList">
          {animals.map((animal, index) => (
            <Card key={`animal${index}`}>
              <Card.Body>
                <Card.Title>Animal: {animal.name}</Card.Title>
                <Card.Subtitle>Espécie: {animal.especie}</Card.Subtitle>
              </Card.Body>
              <Card.Img src={animal.Img} variant="left"></Card.Img>

            </Card>))}
        </div>
      </Container>
    );
  }
}