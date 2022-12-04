import React from "react";
const Marketingb=(props)=>
{

return <>
<div className="col-md-6 provides">
    <div className="row">
        <h2>{props.grow}</h2>
    </div>
    <div className="row mt-3">
        <p>{props.provides}</p>
    </div>
    <div className="row mt-3">
        <div className="col-md-3 col-sm-6">
            <button className="Get-started">
                Get started
            </button>

        </div>
        <div className="col-md-9 col-sm-6">
            <button className="Get-star">
                Get in touch
            </button>

        </div>
    </div>

</div>
<div className="col-md-6">
     <img className="hero-machine" src={props.image} alt="image"/>    
     </div>
</>



}
export default Marketingb;