import "./index.css"
import Leftsidebar from "../../components/Leftsidebar"
import Rightsidebar from "../../components/Rightsidebar"
import HomeMainbar from "../../components/HomeMainbar"

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