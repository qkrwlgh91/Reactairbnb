import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {Home, Login} from "../pages";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends React.Component {


    render() {
        return (
            <div>
                <Header/>
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
