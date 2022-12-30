import React from "react"

import "./index.css"

const Questions=(props)=> {
    const {questionDetails} = props

    const {votes,noOfAnswers,questionTitle,userPosted,questionTags,postedOn} = questionDetails


    return(
        <li className="qusetions-container">
            <div className="votes-questions">
                <p>{votes} votes</p>
                <p>{noOfAnswers} answers</p>
            </div>
            <div className="question-body">
                <p className="question-text">{questionTitle}</p>
                <div className="question-tags-user-container">
                    <div className="question-tags-container">
                        {questionTags.map(eachtag=>(
                            <p className="each-tag" key={eachtag}>{eachtag}</p>
                        ))}

                    </div>
                    <p style={{"text-align":"right"}}>asked {postedOn}  {userPosted}</p>    
                </div>
            </div>

        </li>
    )

}

export default Questions