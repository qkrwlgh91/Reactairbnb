import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {Home, Login, SignIn} from "../pages";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/Login/:name" component={Login}/>
                    <Route path="/Login" component={Login}/>
                </Switch>
                <Route path="/SignIn" component={SignIn}/>
                <hr/>
                <Footer/>
            </div>
        )
    }
}

export default App;
