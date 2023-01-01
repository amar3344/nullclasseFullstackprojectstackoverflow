import React from "react"


import "./index.css"

const AskQuestionPage=()=>{

    return(
        <div className="askquestion-container">
            <div className="askquestion-top-heading">
                <h1>Ask a Public Question</h1>
            </div>
            <form className="askquestion-form-container">
            <div className="askQuestion-title-container">
                <label htmlFor="title">
                    <h6>Title</h6>
                    <p>Be specific and imagine you’re asking a question to another person.</p>
                </label>
                <input type="text" id="title" placeholder="e.g. is there an R function for finding the index of an element in a vector?"/>
            </div>
            <div className="askquestion-body-container">
                <label htmlFor="body">
                    <h6>Body</h6>
                    <p>Include all information someone would need to answer your question</p>
                </label>
                <textarea id="body" type="text" col="30" rows="12"></textarea>
            </div>
            <div className="askquestion-tag-container">
                <label htmlFor="tags">
                    <h6>Tags</h6>
                    <p>Add upto 5 tags to describe what your opinion is about</p>
                </label>
                <input id="tags" type="text" placeholder="e.g. (XML typescript wordpress) "/>

            </div>
            </form>
            <button type="submit" className="askquestion-submit-btn">Riview your question</button>
                
        </div>
    )
}

export default AskQuestionPage