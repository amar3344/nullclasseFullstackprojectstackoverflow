import {useLocation,useNavigate} from "react-router-dom"

import Questions from "../Questions"
import "./index.css"
let User = 1

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
    const navgate = useNavigate()

    const goesToQuestionPage=()=>{
        if(User === null){
            alert("Please Login")
            navgate("/Auth")
        }

        else{
            navgate("/AskQuestion")
        }
    }


    return(
        <div className="homemain-conatiner">
            <div className="home-main-top-container">
                {location.pathname === "/" ? <h4 className="homemainbar-heading">Top Questions</h4> : 
                <h4>All Questions</h4>}
                <button className="home-button" onClick={goesToQuestionPage}>Ask Questions</button>
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