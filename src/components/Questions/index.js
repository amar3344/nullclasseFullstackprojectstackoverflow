import React from "react"

import "./index.css"

const Questions=(props)=> {
    const {questionDetails} = props

    const {votes,noOfAnswers,questionTitle,userPosted,questionTags,postedOn} = questionDetails


    return(
        <li className="qusetions-container">
            <div className="display">
            <div className="votes-questions">
                <p>{votes} votes</p>
                <p>{noOfAnswers} answers</p>
            </div>
            <div className="question-body">
                <div className="question-container">
                    <p className="question-text">{questionTitle}</p>
                    <div className="question-tags-container">
                        {questionTags.map(eachtag=>(
                            <p className="each-tag" key={eachtag}>{eachtag}</p>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <p className="date-display">asked {postedOn}  {userPosted}</p>     

        </li>
    )

}

export default Questions