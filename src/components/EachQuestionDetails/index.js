import {Link} from "react-router-dom"
import React,{useState} from "react"

import "./index.css"
import upVote from "../../assets/up.svg"
import downVote from "../../assets/down.svg"

const EachQuestionDetails = (props)=>{


    const {details} = props
    const {questionTitle,upVotes,downVotes,questionBody,questionTags,postedOn,userPosted,noOfAnswers,answer}  = details

    const [votes,updateVotes] = useState(upVotes-downVotes)

    const onclickUpVote = ()=>{
        updateVotes(votes+1)
    }

    const onclickDownVote =()=>{
        updateVotes(votes-1)
    }

    return(
        <li className="eachQuestion-container">
            <h1 className="eachQuestion-heading">{questionTitle}</h1>
            <div className="each-question-description">
                <div className="votes-conainr">
                    <button type="button" className="but-up-down" onClick={onclickUpVote}><img src={upVote}  alt="up" width={"10px"}/></button>  
                    <p>{votes}</p>
                    <button type="button" className="but-up-down" onClick={onclickDownVote}><img src={downVote} alt="down" width={"10px"}/></button>
                    
                </div>
                <div className="question-body-container">
                    <h4>{questionBody}</h4>
                    <div className="eachquestion-tag-container">
                        {questionTags.map(tag =>(
                            <Link to="/tags" className="link-tags">{tag}</Link>
                        ))}
                    </div>
                    <div className="each-question-buttons-users">
                        <div>
                            <button type="button">Share</button>
                            <button type="butoon">Delete</button>
                        </div>
                        <div>
                        <p style={{margin:"0px"}}>asked {postedOn}</p>
                        <div className="user-container">
                            <Link to="/user" className="user">{userPosted.slice(0,1).toUpperCase()}</Link>
                            <p>{userPosted}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="answer-description">
                {answer.map(eachAnswer => (
                    <>
                    <h3>{noOfAnswers} Answers</h3>
                <p>Answer by {eachAnswer.userAnswered}</p>
                <div className="each-question-buttons-users">
                    <button type="button">Share</button>
                    <div>
                        <p style={{margin:"0px"}}>asked {eachAnswer.answeresOn}</p>
                        <div className="user-container">
                            <Link to="/user" className="user">{eachAnswer.userAnswered.slice(0,1).toUpperCase()}</Link>
                            <p>{eachAnswer.userAnswered}</p>
                        </div>
                    </div>
                </div>
                    </>
                ))}    
            </div>    
            <div className="your-answer-container">
                <h4>Your Answer</h4>
                <form>
                <textarea type="text" col="20" row="40"/>
                </form>
                <button type="submit">Post Your Answer</button>
                <p>Browse other questions tagged{" "}
                {questionTags.map(tag =>(
                    <Link to="/tags" className="link-tags" key={tag}>{tag}</Link>
                ))}
                {" "}or <Link to="/" className="link-text">ask your own question.</Link>
                </p> 
            </div>   
            
                 
                

            
        </li>
    )
}

export default EachQuestionDetails