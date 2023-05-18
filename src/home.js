import React from "react";




function Home(props){




    return(
        <>
        
        {/* <div className="homepage"> */}
        {/* <div style={{height:'115px'}}></div> */}
        {/* <h1>Home</h1> */}
        <div className="doctor_info extended">
            <h1>Pro Healthcare of Marietta</h1>
            <h3> 3208 Canton Road, Suite 112 Marietta, GA 30066</h3>
            <h3>(Across the street from Marietta Fish Market)</h3>
            <div style={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:"center", margin:'10px 0'}}>
            <div className="buttons_holder"></div>
            <div className="buttons_holder"></div>
            <div className="buttons_holder"></div>
            </div>
        </div>

        {/* </div> */}
        </>
    )
    
}


export default Home