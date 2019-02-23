import React, {Component} from "react";
import logo from '../../logo.svg';
import Header from '../../components/Header';
import API from '../../utils/API'; 

import './style.css';

class Admin extends Component {
    
    state = {
        allUsers: ["test user"],
        // testingState: [] // TESTING SET.STATE
    }

    componentDidMount() {
        this.getUsers()
        // this.settingState() // TESTING SET.STATE
    }

    getUsers() {
        API.getAllUsers()
            .then(res => 
                this.setState({allUsers: res.data}, () => {console.log(this.state.allUsers, "state.allUsers")}) )
            .catch(err => console.log(err))
    }

    // settingState() { // TESTING SET.STATE
    //     this.setState({testingState: 'Test data'}, () => {console.log(this.state.testingState)} );
    // }

    render() {
        return (

            <div>
                <Header/>
                <section className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Admin</p>

                    <p>Current Users</p>
                    {
                        this.state.allUsers.length > 0 ?
                            this.state.allUsers.map(user => {
                                return <li key={ user.id }>{user.name}</li>;
                            })
                        :  <p>No Users</p>

                    }
                </section>
            </div>

        )
    }
};

export default Admin;
