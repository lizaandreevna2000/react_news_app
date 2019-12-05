import React from 'react';
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../config';
import { postToken } from "../actions/newsActions";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { writeValue } from '../helper/storage';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: localStorage.getItem('status') || false,
            user: localStorage.getItem('name') || '',
            token: ''
        };
    }
    logout = () => {
        this.setState({ isAuthenticated: false, user: '', token: ''});
        localStorage.clear();
    }
    responseGoogle = (response) => {
        this.setState({ isAuthenticated: true, user: response.profileObj.name, token:response.tokenId});
        const token = this.state.token;
        this.props.postToken(token); 
        writeValue(this.state.isAuthenticated, this.state.user);
    }
    render() {
        let content = !!this.state.isAuthenticated ? (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink to="/news" className="navbar-item">
                    <p className='navbar-title'>sport news</p>
                </NavLink>
            </div>

            <div className="navbar-end">
                <h2 className='pretitle'>Welcome: {this.state.user} </h2>
                <div className="buttons">
                    <button className='button' onClick={this.logout}>Log Out</button>
                </div>
            </div>
        </nav>
        ) :
        (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <p className='navbar-title'>sport news</p>
                </a>
            </div>

            <div className="navbar-end">
                <div className="buttons login">
                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Log In"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </nav>
        )
        return content
    }
}

Header.propTypes = {
    postToken: PropTypes.func.isRequired
}

export default connect(null, {postToken})(Header);