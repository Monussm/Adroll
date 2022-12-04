import React from "react";
const Forb =(props)=>
{
return <>
<div className="col-md-6">
<div className="row mt-3">
        <h3>{props.customers}</h3>
    </div>
    <div className="row mt-3">
        <p>{props.para}</p>
    </div>
    <div className="row">
        <a href="#" className="studies">{props.anch}</a>
    </div>
</div>
<div className="col-md-6">
    <img src={props.eye} alt="eye"/>
</div>

    

</>


}
export default Forb;