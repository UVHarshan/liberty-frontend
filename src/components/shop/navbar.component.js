import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark me-auto">
        <div className="container-fluid">
          <Link to=""  className="navbar-brand" >Liberty Super Center</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>   
             
             
  
              <li className="nav-item dropdown">
                <Link to=""  className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to=""  className="dropdown-item" >Profile</Link></li>
                  <li><Link to=""  className="dropdown-item" >Settings</Link></li>
                  <li><Link to=""  className="dropdown-item" >Logout</Link></li>
                </ul>
              </li>
            </ul>          
          </div>
        </div>
      </nav>    

    );
  }
}