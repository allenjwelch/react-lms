import React, {Component} from "react";
import logo from '../../logo.svg';
import Header from '../../components/Header';

import './style.css';

const Courses = () => (
    <div>
        <Header/>
        <section className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Courses</p>
        </section>
    </div>
);

export default Courses;
