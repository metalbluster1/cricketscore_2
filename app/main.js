import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Components

import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Title from './components/Title'
import Upcoming from './components/Upcoming'
import Live from './components/Live'
import Recent from './components/Recent'
import ScoreUpload from './components/Scoreupload'
import ClientLogin from './components/Clientlogin'
import ClientSignup from './components/ClientSignup'



function AppComponents() {

    const [matches, setMatches] = useState([])

    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Title />
            <Switch>
                <Route path="/" exact>
                    <ul>
                        {matches.map(match => {
                            <Live setMatches={setMatches} id={match.id} date={match.date} score1={match.score1} score2={match.score2} result={match.result} pom={match.pom} key={match.id} />
                        })
                        }
                    </ul>
                </Route>
                {/* <Route path="/upcoming">
                    <Upcoming />
                </Route>
                <Route path="/recent">
                    <Recent />
                </Route> */}
            </Switch>
            <ScoreUpload />
            <Footer />
            <ClientLogin />
            <ClientSignup />
        </BrowserRouter>
    )
}

ReactDOM.render(<AppComponents />, document.querySelector("#app"))