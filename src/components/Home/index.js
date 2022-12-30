import "./index.css"
import Leftsidebar from "../Leftsidebar"
import Rightsidebar from "../Rightsidebar"
import HomeMainbar from "../HomeMainbar"

const Home =()=>{
    return(
        <div className="navsidebars-container">
            <Leftsidebar/>
            <div className="home-conatiner">
                <HomeMainbar/>
                <Rightsidebar/>

            </div>
            

        </div>
    )
}

export default Home