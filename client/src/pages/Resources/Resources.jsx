import React, {Component} from "react";
import logo from '../../logo.svg';
import Header from '../../components/Header';

import './style.css';

const Resources = () => (
    <div>
        <Header/>
        <section className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Resources</p>
        </section>
    </div>
);

export default Resources;
