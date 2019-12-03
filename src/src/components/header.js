import React from 'react';
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../config'
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: localStorage.getItem('status') || false,
            user: localStorage.getItem('name') || ''
        };
    }
    logout = () => {
        this.setState({ isAuthenticated: false, user: '' });
        localStorage.removeItem('status');
        localStorage.removeItem('name');
    }
    responseGoogle = (response) => {
        this.setState({ isAuthenticated: true, user: response.profileObj.name });
        localStorage.setItem('status', this.state.isAuthenticated);
        localStorage.setItem('name', this.state.user)
    }
    render() {
        let content = !!this.state.isAuthenticated ? (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <p className='navbar-title'>sport news</p>
                </a>

                {/* <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div> */}
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

                    {/* <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div> */}
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

export default Header