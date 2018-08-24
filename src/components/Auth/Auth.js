import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';
import axios from 'axios';

class Auth extends Component{
        state = {
            username: '',
            password: ''

        }

    handleChange(e){
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    onRegister(){
        axios.post('/api/register', {username: this.state.username, password: this.state.password})
            .then(response => (this.props.updateUser(response.data)))
    }

    onLogin(){
        axios.post('/api/login', {username: this.state.username, password: this.state.password})
            .then(response => {this.props.updateUser(response.data.user)
            console.log(response)
            })
    }


    render(){
        return(
            <div>
                <input placeholder='username' onChange={e => this.handleChange(e)}value={this.state.username}name='username'type="text"/>
                <input placeholder='password' onChange={e => this.handleChange(e)}value={this.state.password}name='password'type="text"/>
                <Link to='/dashboard'><button onClick={() => this.onLogin()}>Login</button></Link>
                <Link to='/dashboard'><button onClick={() => this.onRegister()}>Register</button></Link>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Auth);