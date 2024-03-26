import React from 'react'

function Navbar(){
    return(
        <div>
            <nav>
                <h1 style={{backgroundColor:"yellow", color:"red"}}>My Education</h1>
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