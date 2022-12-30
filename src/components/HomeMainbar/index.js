import {useLocation} from "react-router-dom"

import Questions from "../Questions"
import "./index.css"

const HomeMainbar=()=>{

    var questionsLsit = [{
        id:1,
        votes:3,
        noOfAnswers : 2,
        questionTitle : "What is a function?",
        questionBody : "It meant to be",
        questionTags : ["java","node js" , "react js" ,"mongoosedb"],
        userPosted : "amar",
        postedOn : "jan 1"
    },{
        id:2,
        votes:0,
        noOfAnswers : 0,
        questionTitle : "What is a function?",
        questionBody : "It meant to be",
        questionTags : ["java","node js" , "react js" ,"mongoosedb"],
        userPosted : "amar",
        postedOn : "jan 1"
    },{
        id:3,
        votes:1,
        noOfAnswers : 2,
        questionTitle : "What is a function?",
        questionBody : "It meant to be",
        questionTags : ["javascript","R" , "python"],
        userPosted : "amar",
        postedOn : "jan 1"
    }]
     
    const location = useLocation()

    return(
        <div className="homemain-conatiner">
            <div className="home-main-top-container">
                {location.pathname === "/" ? <h4>Top Questions</h4> : 
                <h4>All Questions</h4>}
                <button className="home-button">Ask Questions</button>
            </div>
            
            <ul className="home-questions-container">
                <p>{questionsLsit.length} questions</p>
                    {questionsLsit.map(eachQuestion =>(
                        <Questions key={eachQuestion.id} questionDetails={eachQuestion}/>
                    ))}
                    

            </ul>
        </div>
    )
}

export default HomeMainbar