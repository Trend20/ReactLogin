import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
 
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }

    render() { 
        return (
            <form id="form" method="POST">
                <div className="form-group input-container">
                    <label>
                        <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input 
                    type="text"
                    className="form-control input"
                    placeholder="Enter Username"
                    id="username" 
                    value={this.state.username}
                    onChange={() =>this.handleInput(e)}
                    />
                </div>
                <div className="form-group input-container">
                    <label>
                    <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input 
                    type="password"
                    className="form-control input"
                    placeholder="Enter Password"
                    id="password" 
                    value={this.state.password}
                    onChange={() =>this.handleInput(e)}
                    />
                </div>
                <input
                type="submit"
                value="Submit"
                id="submit"
                className="btn-primary" />
            </form>
        );
    }
}
 
export default Form;