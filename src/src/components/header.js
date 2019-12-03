import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import  {CLIENT_ID} from '../config'
class Header extends React.Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null};
    }
    logout = () => {
        this.setState({isAuthenticated: false, user:null})
    }
    responseGoogle = (response) => {
        this.setState({isAuthenticated: true, user: response.profileObj.name})
        console.log(this.state.user)
    }
    render() {
        return (
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <p className = 'navbar-title'>sport news</p>
                    </a>

                    {/* <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div> */}
                </div>

                <div className="navbar-end">
                    <h2>Welcome:{this.state.user} </h2> 
                    <div className="buttons">
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
    }
}

export default Header