import React from "react";
import services from "../../services";
import { Form, Button, Card } from "react-bootstrap";
import "./User.css";

export default class EditUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: "", email: "", username: "", password: "", userLoged: window.sessionStorage.getItem("users") };
        this.getuser();
    }



    handleSubmit(evt) {
        const user = JSON.parse(this.state.userLoged);
        evt.preventDefault();
        services.auth.update(user._id, { name: this.state.nome, email: this.state.email }).then(() => {


        });
    }

    getuser() {
        const user = JSON.parse(this.state.userLoged);
        const dados = services.auth.getOne(user._id)
            .then((response) => {
                this.setState({ nome: response.name, email: response.email, username: response.username })
            }).catch((err) => {

            });

    }


    render() {
        const { nome, email, username, password, userLoged } = this.state;
        const user = JSON.parse(userLoged);

        return (
            <div id="auth-board">
                <Card style={{ width: "18rem" }}>
                    <Form onSubmit={(evt) => this.handleSubmit(evt)}>
                        <Card.Body>
                            <Card.Title>Meus Dados:</Card.Title>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    required true
                                    value={this.state.nome}
                                    onChange={(evt) => this.setState({ nome: evt.target.value })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required true
                                    value={this.state.email}
                                    onChange={(evt) => this.setState({ email: evt.target.value })}
                                />
                            </Form.Group>



                            <Button variant="primary" type="submit" block>
                                Editar
              </Button>
                        </Card.Body>
                    </Form>
                </Card>
            </div>
        );
    }
}