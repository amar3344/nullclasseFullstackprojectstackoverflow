import {useState} from "react"

import "./index.css"
import stackoverflowImage from "..//../assets/stack-image.png"
const Auth = ()=>{
  
        const [isSignUp,setIsSignUp] = useState(false)

        const handleSwitch=()=>{
            setIsSignUp(!isSignUp)
        }

    return(
        <div className="login-page-container">
            {isSignUp && (
                    <div className="sign-up-container">
                        <p className="about-text">Join the Stack Overflow community<br/>
                            Get unstuck — ask a question<br/>
                            Unlock new privileges like voting and commenting<br/>
                            Save your favorite tags, filters, and jobs<br/>
                            Earn reputation and badges<br/>
                            Collaborate and share knowledge with a private group for FREE.<br/>
                            Get Stack Overflow for Teams free for up to 50 users.</p>

                    </div>
                )}
            <div className="image-form-container">
                <img src={stackoverflowImage} alt="stackoverflow" className="stack-over-flow-image"/>
                <form className="form-container">
                    {isSignUp && (
                        <>
                        <label htmlFor="name" name="name" placeholder="name">Display Name</label>
                        <input type="name" id="name" style={{"margin-bottom":"10px"}}/>
                        </>
                    )}

                    <label htmlFor="email"> Email</label>
                    <input id="email" type="email" name="email" placeholder="email.."/>

                    <div className="lable-elements">
                        <label htmlFor="password">Password</label>
                        <p className="blue-colors">forgot password?</p>
                    </div>
                    <input id="password" type="password" placeholder="password"/>
                    {isSignUp && (
                        <p style={{"font-size":"13px"}}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                    )}
                    {isSignUp && (
                        <div className="check-box-container">
                        <input type="checkbox" id="checkbox" className="check-box"/>
                        <label style={{"font-size":"13px" ,"font-weight":"400"}} htmlFor="checkbox">Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</label>
                        </div>
                    )}
                    {isSignUp ? <button type="button" className="form-buttons">Sign Up</button> : <button type="submit" className="form-buttons">Login</button>}
                </form>
                {!isSignUp ? <p>Don't have an account ?
                    <span className="sign-up-btn" onClick={handleSwitch}>sign up</span>
                </p> : <p>You have an account ?
                    <span className="sign-up-btn" onClick={handleSwitch}>log in</span>
                </p>}
                
            </div>
            
        </div>
    )
}

export default Auth