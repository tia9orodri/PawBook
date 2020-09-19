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
      nome: "leão",
      tipo: "gato",
      idade: "5meses",
      raca: "gato grande",
      localidade: "Lisboa",
      observacoes: "Isto é um tigre do tiger king",
      anunciante:JSON.parse(window.sessionStorage.getItem("users"))._id
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