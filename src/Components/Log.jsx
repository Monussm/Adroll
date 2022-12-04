import React from "react";
import { NavLink } from "react-router-dom";

const Log=()=>
{
    return <>
    <div className="container login-page">
        <div className="row">
            <img className="login mt-4" src="../Image/Logo.svg" alt="Logo"/>
        </div>
        <form>
    <div className="form mt-3">
      <h3>Email address</h3>
      <input type="email" className="form-control" placeholder="name@example.com" required/>
    </div>
    <div className=" mt-3">
      <h3>Password</h3>
      <input type="password" className="form-control" placeholder="Password" required/>
    </div>
    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
    <p className="mt-3 text-center"><NavLink  to="" className="Forget">Forget your password ?</NavLink></p>
  </form>
  <hr />
  <p className="text-center">Don't have account?<a className="Forget">Sign up</a></p>
    </div>
    <div className="container login-page mt-5">
        <div className="row">
            <div className="col-md-4">
                <p className="services">Terms of servies</p>
            </div>
            <div className="col-md-4">
                <p className="services">Privacy Notice</p>
            </div>
            <div className="col-md-4">
                <p className="services">Adjust Ad Preferences</p>
            </div>

        </div>
        <p className="services text-center">
   Copyright © 2022 Monu Gupta, Inc. All rights reserved.</p>

    </div>
    
    </>
}
export default Log;