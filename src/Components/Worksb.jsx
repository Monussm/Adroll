import React from "react";
const Worksb=(props)=>
{
    return <>
    <div className="col-md-6">
        <div className="row">
            <h3 className="for">AdRoll works for the</h3>
            <h3 className="blink">Ecommerce Store owner</h3>
            <p className="mt-3">No matter the size of your business, the AdRoll marketing platform 
                levels the advertising playing field and helps you earn more.</p>
                <a href="#" className="studies">Explore case studies</a>
        </div>
    </div>
    <div className="col-md-6">
        <div className="row">
            <div className="col-md-6">
                <img src={props.Pic1} alt="image"/>
            </div>
            <div className="col-md-6 mt-4">
            <img src={props.Pic2} alt="image"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mt-4">
                <img src={props.Pic3} alt="image"/>
            </div>
            <div className="col-md-6 mt-4">
            <img src={props.Pic4} alt="image"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mt-4">
                <img src={props.Pic5} alt="image"/>
            </div>
            <div className="col-md-6 mt-4">
            <img src={props.Pic6} alt="image"/>
            </div>
        </div>
    </div>
    
    </>




}
export default Worksb