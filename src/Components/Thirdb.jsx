import React from "react";
const Thirdb=(props)=>
{

return <>
<div className="col-md-6 para">
    <img src={props.eye} alt="eye"/>
</div>
<div className="col-md-6 para">
    <div className="row">
        <h3>{props.customers}</h3>
    </div>
    <div className="row mt-3">
        <p>{props.para}</p>
    </div>
    <div className="row ">
        <a href="#" className="studies">{props.anch}</a>
    </div>

</div>




</>


}
export default Thirdb