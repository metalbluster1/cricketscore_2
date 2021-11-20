import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <div className="main-header">
                <div id="header" className="container">
                    <h1 className="header">LOCAL CRICKET</h1>
                </div>
                <div className="client-header">
                    <ul>
                        <Link className="login client">Login</Link>
                        <Link className="signup client">SignUp</Link>
                    </ul>
                </div>
            </div>
        </header>
    )

}

export default Header