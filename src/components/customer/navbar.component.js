import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/customer/landing" className="navbar-brand">Liberty Super</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <Link to="/customer/login" className="nav-link" aria-current="page">Login</Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/customer/signup" className="nav-link">Sign Up </Link>
                        </li>
                        <li className="nav-item dropdown">
                           <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/customer/household" className="dropdown-item"> Household</Link></li>
                                <li><Link to="/customer/groceryProducts" className="dropdown-item"> Grocery </Link></li>
                                <li><Link to="/customer/dairyProducts" className="dropdown-item"> Diary Products </Link></li>
                                <li><Link to="" className="dropdown-item"> Fruits </Link></li>
                                <li><Link to="" className="dropdown-item"> Vegetables </Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
      
    );
  }
}