import React, {Component} from "react";
import logo from '../../logo.svg';
import Header from '../../components/Header';

import './style.css';

const Home = () => (
    <div>
        <Header/>
        <section className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Home Page</p>

        </section>
    </div>
);

export default Home;
