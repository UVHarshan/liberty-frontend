import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Login extends Component {

  render() {
    return (
        <section className="pt-4">            
            <div className="login card mx-auto" >
                <h1> Login </h1>
                    <div className="card-body">
                        <form >
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <a href="#"> Forgot Password?</a>                            
                            </div>
                            <button type="submit" className="btn btn-primary"> Login </button>
                        </form>
                    </div>
            </div>
        </section>
        
      
    );
  }
}