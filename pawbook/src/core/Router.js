import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from "../components/global/Navbar";
import PrivateRoute from "../components/global/PrivateRoute";
import { roles } from "../configs/authContext";


import Home from '../pages/home/Home';
import About from '../pages/about/About';

import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

import AnimalListPage from "../pages/animal/ListAnimals";
import AnimalDetailsPage from "../pages/animal/AnimalDetails";
import UserListPage from "../pages/user/ListUser";
import UserDetailsPage from "../pages/user/UserDetails";


export default class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <NavbarComponent />
                <Switch>
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/animal/list" component={AnimalListPage} />
                    <Route exact path="/animal/details/:id" component={AnimalDetailsPage}/>
                    <PrivateRoute roles={[roles.Boss, roles.Servant]} exact path="/user/list" component={UserListPage} />
                    <PrivateRoute roles={[roles.Boss, roles.Servant]} exact path="/user/details/:id" component={UserDetailsPage} />
                    <Route path="*" component={Home} />
                </Switch>
            </Router>
        );
    }
}