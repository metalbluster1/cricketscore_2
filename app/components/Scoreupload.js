import React, { useState } from 'react'
import Live from './Live'



function ScoreUpload(props) {

    const [date, setDate] = useState()
    const [score1, setScore1] = useState()
    const [score2, setScore2] = useState()
    const [result, setResult] = useState()
    const [pom, setPom] = useState()

    function MatchSumbitHandle(e) {
        e.preventDefault()
        props.setMatches(prev => prev.concat({ date, score1, score2, result, pom, id: Date.now() }))
        setDate("")
        setScore1("")
        setScore2("")
        setResult("")
        setPom("")
    }


    return (
        <form onSubmit={MatchSumbitHandle}>
            <section id="live-information" className="information">
                <div className="live-matchs" id="live-matches">
                    <div className="match-1 match">

                        <ul>
                            <li>
                                <h3 className="match-no">Match details</h3>
                            </li>
                            <li><small>Live</small></li>
                        </ul>
                        <ul>
                            <li>
                                <h4>date</h4><input value={date} onChange={e => setDate(e.target.value)} type="date"></input>
                            </li>
                            <li>
                                <h4>Time</h4> <input type="time"></input>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>Team 1 score</h3>
                            </li>
                            <li>
                                <input value={score1} onChange={e => setScore1(e.target.value)} className="input-scores" type="text" placeholder="Enter score"></input>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>Team 2 score</h3>
                            </li>
                            <li>
                                <input value={score2} onChange={e => setScore2(e.target.value)} className="input-scores" type="text" placeholder="Enter score"></input>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>Match Result</h3>
                            </li>
                            <li>
                                <input value={result} onChange={e => setResult(e.target.value)} className="input-scores" type="text" placeholder="Team Name"></input>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Player of the Match</h4>
                            </li>
                            <li>
                                <input value={pom} onChange={e => setPom(e.target.value)} className="input-scores" type="text" placeholder="Name"></input>
                            </li>
                        </ul>
                        <button className="btn score-btn">Submit</button>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default ScoreUpload