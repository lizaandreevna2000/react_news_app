import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <p className = 'navbar-title'>sport news</p>
                    </a>

                    <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="buttons">
                        <button className="button is-light">
                            Log in
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header