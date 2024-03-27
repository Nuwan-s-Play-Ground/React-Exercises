import React from 'react'

function Navbar(){
    const style = {
        backgroundColor:"yellow", 
        color:"red",
        fontSize:24}
    return(
        <div>
            <nav>
                <h1 style={style}>My Education</h1>
                <ol>
                    <li>Combined Maths</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Software Engineering</li>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar