import React from "react";

function InfoSection(props){
let {info, formInfo} = props
console.log(info)
    return(
        <>
       <div className="info_section_holder">
       <div className="info_section">
        <div className="info1">
        {/* {info.map(x =>  x.title1 ? <h1>{x.title1}</h1> : <h2>{x.title2}</h2>)} */}
        {info.map(x =>   <>
        {x.title1 ? <h1>{x.title1}</h1> : <h2>{x.title2}</h2>}
        {typeof(x.text[0]) === 'object' ? <ul>{x.text.map(y => <li>{y.map((z,a) => a === 0 ? <p style={{fontWeight: 'bold'}}>{z}</p> : <p>{z}</p>)}</li>)}</ul> : x.text.map(z => <p>{z}</p>)}
        </>
// typeof(x.text[0]) === 'object' ? <ul>{x.text.map(y => <li>{y}</li>)}</ul> : x.text.map(z => <p>{z}</p>)
            )}
        
        
        
        
        
        {/* {info.map(x => typeof(x.text[0]) === 'object' ? <ul>{x.text.map(y => <li>{y}</li>)}</ul> : x.text.map(z => <p>{z}</p>) )} */}
        {info.map(x => console.log(x.text))}
        </div>
        <div className="form1"></div>
            
            </div>
       </div>
        </>
    )
}


export default InfoSection