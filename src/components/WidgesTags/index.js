import React from "react"
import "./index.css"

const WidgesTags=()=>{

    const Tags = ["c","css","html","python","php","java","javascript","react","node","sql","mogoose","express","c++","bootstrap"]
    return(
        <div className="widgestags-container">
            <p className="heading-watchedtag">Watched Tags</p>
            <div className="tags-conatainer">
                {
                    Tags.map(eachtag =>(
                        <p className="tags">{eachtag}</p>
                    ))
                }

            </div>


        </div>
    )
}

export default WidgesTags