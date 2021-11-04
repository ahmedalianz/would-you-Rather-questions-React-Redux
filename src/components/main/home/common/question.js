import React from 'react'
import {Link} from 'react-router-dom'
import Loader from "react-loader-spinner";
export default function Question({question}) {
    return question? (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Would You Rather ?</h5>
                    <p className="card-text">{question.optionOne.text}...</p>
                    <Link to={`/questions/${question.id}`} className="btn btn-primary">View Poll</Link>
                </div>
            </div>
        ):(
            <Loader
            type="Oval"
            color="#00BFFF"
            height={30}
            width={30}
        />
                )
}
