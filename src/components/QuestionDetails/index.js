import { useParams } from "react-router-dom"
import React from "react"

import EachQuestionDetails from "../EachQuestionDetails"


import "./index.css"



const QuestionDetails=()=>{

    const idObject = useParams()
    const {id} = idObject

    var questionsList = [{
        id:"1",
        upVotes:3,
        downVotes:2,
        noOfAnswers : 2,
        questionTitle : "What is a function?",
        questionBody : "It meant to be",
        questionTags : ["java","node js" , "react js" ,"mongoosedb"],
        userPosted : "amar",
        postedOn : "jan 1",
        userId:1,
        answer :[{
            answerBody : "Answer",
            userAnswered : "reddy",
            answeresOn:"jan 2",
            userId : 12
        }]

    },{
        id:"2",
        upVotes:3,
        downVotes:2,
        noOfAnswers : 0,
        questionTitle : "What is a function?",
        questionBody : "It meant to be",
        questionTags : ["java","node js" , "react js" ,"mongoosedb"],
        userPosted : "amar",
        postedOn : "jan 1",
        userId:1,
        answer:[{
            answerBody : "Answer",
            userAnswered : "Kumar",
            answeresOn:"jan 2",
            userId : 10

        }]
    },{
        id:"3",
        upVotes:20,
        downVotes:2,
        noOfAnswers : 2,
        questionTitle : "What is a function?",
        questionBody : "It meant to be",
        questionTags : ["javascript","R" , "python"],
        userPosted : "amar",
        postedOn : "jan 1",
        userId:15,
        answer:[{
            answerBody : "Answer",
            userAnswered : "amar",
            answeresOn:"jan 2",
            userId : 12
        }]
    }]
    
    const filtered = questionsList.filter(item => item.id === id)
    console.log(filtered)


    return(
        <ul className="questionpage-container">

            {questionsList.filter(eachQuestion => eachQuestion.id === id).map(item=>(
                <EachQuestionDetails key={item.id} details={item}/>
            ))}
            

        </ul>
    )
}

export default QuestionDetails