import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Form extends Component {
    render() { 
        return (
            <form id="form" method="POST">
                <div className="form-group">
                    <label>Username</label>
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    id="username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    id="password" />
                </div>
            </form>
        );
    }
}
 
export default Form;