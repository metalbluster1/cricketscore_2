import React from 'react'

function ClientLogin() {
    return (
        <section id="live-information" className="information">
            <div className="live-matchs" id="live-matches">
                <div className="match-1 match">
                    <form onSubmit>
                        <ul className="login-page">
                            <li><h3>Login</h3></li>
                            <li>
                                <label className="client-label">Username</label>
                                <input className="client-input" type="email" htmlFor="email" placeholder="Enter email"></input>
                            </li>
                            <li>
                                <label className="client-label">Password</label>
                                <input className="client-input" type="password" htmlFor="password" placeholder="password"></input>
                            </li>
                        </ul>
                        <button className="btn score-btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ClientLogin