import React, {Component} from "react";
import logo from '../../logo.svg';
import Header from '../../components/Header';
import StudentList from '../../components/StudentList';

import './style.css';

const Admin = () => (

    <div>
        <Header/>
        <section className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Admin</p>
            <StudentList />

        </section>
    </div>
);

export default Admin;
