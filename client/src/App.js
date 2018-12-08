import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Admin from "./pages/Admin";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className = "main">
                    {/* <Header/> */}
                        <Switch>
                            <Route exact path="/" component={SignIn} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/courses" component={Courses} />
                            <Route exact path="/calendar" component={Calendar} />
                            <Route exact path="/resources" component={Resources} />
                        </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
