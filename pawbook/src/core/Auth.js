import React from "react";
import AuthContext from "../configs/authContext";

export default class AuthComponent extends React.Component {
    constructor(props) {
        super(props);
        const user = sessionStorage.getItem("users");
        console.log(user);
        this.state = {

            user: user ? JSON.parse(user) : undefined,
            login: this.login,
            logout: this.logout,
        };
    }
    login = (user) => {
        sessionStorage.setItem("users", JSON.stringify(user));
        this.setState({ user: user });
    };
    logout = () => {
        sessionStorage.removeItem("users");
        this.setState({ user: undefined });
    };
    render() {
        return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>;
    }
}