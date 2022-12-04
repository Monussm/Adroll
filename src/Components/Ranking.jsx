import React from "react";
const Ranking=(props)=>
{
 return <>
 <div className="container rank">
    <div className="row">
        <div className="col-md text-center">
        <img className="rank" src={props.Rank1} alt="Rank1"/>
        <img className="rank" src={props.Rank2} alt="Rank1"/>
        <img className="rank" src={props.Rank3} alt="Rank1"/>
        <img className="rank" src={props.Rank4} alt="Rank1"/>
        <img className="rank" src={props.Rank5} alt="Rank1"/>

        </div>
    </div>

 </div>
 
 
 </>

}
export default Ranking;