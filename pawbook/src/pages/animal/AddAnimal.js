import React from "react";
import services from "../../services";
import { Container,Button,Alert, Card } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import SubmitDialogComponent from "../../components/animal/SubmitDialog";
import SearchFormComponent from "../../components/global/SearchForm";


export default class AddAnimal extends React.Component {
  static contextType = AuthContext;
  constructor(props){
    super(props);
    this.state={
      nome: "ze",
      tipo: "cao",
      idade: "11meses",
      raca: "labrador",
      localidade: "Setubal",
      observacoes: "qualquer coisa"
    };
  }  

  componentDidMount() {
    //this.addAnimal();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname != prevProps.location.pathname) {
      this.getList();
    }
  }

  addAnimal(){
    services.animal.create(this.state);
  }



  render() {
    return (
      <Container>
        <button>

        </button>
      </Container>
    );
  }
}