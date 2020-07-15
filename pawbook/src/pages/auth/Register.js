import React from "react";
import services from "../../services";
import { Form, Button, Card } from "react-bootstrap";
import "./Auth.css";

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    //define props todas vazias excepto o role
    this.state = { email: "", password: "", name: "", role: 2 };
  }
  //botão de registo
  handleSubmit(evt) {
    evt.preventDefault();
    services.user.register(this.state).then(() => {
      this.props.history.push("/login");
    });
  }

  render() {
    const { email, password, name } = this.state;
    return (
      <div id="auth-board">
        <Card style={{ width: "18rem" }}>
          <Form onSubmit={(evt) => this.handleSubmit(evt)}>
            <Card.Body>
              <Card.Title>Registo</Card.Title>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                required true
                value={email} 
                onChange={(evt) => this.setState({ email: evt.target.value })} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required true
                  type="password"
                  value={password}
                  onChange={(evt) => this.setState({ password: evt.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  required true
                  value={name}
                  onChange={(evt) => this.setState({ name: evt.target.value })}
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Register
              </Button>
              <Button variant="outline-secondary" size="sm" onClick={() => this.props.history.push("/login")} block>
                Login
              </Button>
            </Card.Body>
          </Form>
        </Card>
      </div>
    );
  }
}