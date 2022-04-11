import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from '../component/Menu';
import { Home, About, Login, SignUp } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import '../styles/Common.css'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ Home }/>
                <Route path="/Login" component={ Login }/>
                <Route path="/signup" component={ SignUp }/>
                <Switch>
                    <Route path="/about/:name" component={ About }/>
                    <Route path="/about" component={ About }/>
                </Switch>
            </div>
        );
    }
}

export default App;