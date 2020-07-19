import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {Home, Login} from "../pages";
import Footer from "../components/Footer";

class App extends React.Component {


    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/Login/:name" component={Login}/>
                    <Route path="/Login" component={Login}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App;
