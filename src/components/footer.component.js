import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Liberty.PNG';

export default class Footer extends Component {

  render() {
    return (
        <footer className="full-footer pt-2">
            <div className="container top-footer">
              <div className="row">
        
                <div className="col-md-4">
                  <img className="img-fluid pt-2 pb-2"  src={logo} alt=""/>          
                </div>
                  
        
                <div className="col-md-4  pl-4 pr-4">
                  <h3> Categories </h3>
                  <Link to=""> Grocery </Link><br/>
                  <Link to=""> Household </Link><br/>
                  <Link to=""> Vegetables </Link><br/>
                  <Link to=""> Fruits </Link> <br/>
                  <Link to=""> Dairy Products </Link>
                </div>
        
                <div className="col-md-4  pl-4 pr-4">
                  <h3>Contact Us</h3>
                 <Link to="tel:0778075378"><i className="fas fa-phone"></i> 0775287894 </Link><br/>
                 <Link to="mailto:libertySC@gmail.com"><i className="fas fa-envelope"></i> libertySC@gmail.com</Link><br/>
                </div>
        
              </div>
            </div>
          </footer>
        
      
    );
  }
}