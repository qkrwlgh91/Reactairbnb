import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {Home, Login, RoomInfoAndMap, RoomInfoDetail} from "../pages";
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
                    <Route path={"/RoomInfoAndMap"} component={RoomInfoAndMap} />
                    <Route path={"/RoomInfoDetail"} component={RoomInfoDetail} />
                <Footer/>
            </div>
        )
    }
}

export default App;
