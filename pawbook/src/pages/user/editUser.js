import React from "react";
import services from "../../services";
import { Form, Button, Card } from "react-bootstrap";
import "./User.css";
import Axios from "axios";

export default class EditUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: "Tiago", email: "a@aa.aa", username: "tiago123", password:"", userLoged:window.sessionStorage.getItem("users")};
    }

    

    handleSubmit(evt) {
        evt.preventDefault();
        services.auth.register(this.state).then(() => {
            this.props.history.push("/animal");
           
            
        });
    }
    
   

    render() {
        const { nome, email, username, password,userLoged } = this.state;
        const user = JSON.parse(userLoged);
        alert(typeof user)
        console.log(user);
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
                                    value={nome}
                                    onChange={(evt) => this.setState({ nome: evt.target.value })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required true
                                    value={email}
                                    onChange={(evt) => this.setState({ email: evt.target.value })}
                                />
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required true
                                        value={username}
                                        onChange={(evt) => this.setState({ username: evt.target.value })}
                                    />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>{user.username}</Form.Label>
                                <Form.Control
                                    required true
                                    value={user.username}
                                    onChange={(evt) => this.setState({ user: evt.target.value })}
                                />
                            </Form.Group>
                           
                           
                            <Button variant="outline-secondary" size="sm" onClick={() => this.props.history.push("/animal")} block>
                                Editar
              </Button>
                        </Card.Body>
                    </Form>
                </Card>
            </div>
        );
    }
}