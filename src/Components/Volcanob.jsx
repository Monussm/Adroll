import React from "react";
const Volcanob=(props)=>
{
    return <>
    <div className="col-md-6">
        <img src={props.volcano} alt="volcano log" />
    </div>
    <div className="col-md-6 mt-3">
        <div className="row">
            <h4>{props.last}</h4>
        </div>
    </div>
    </>
}
export default Volcanob;