import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Sidebar extends Component {

  render() {
    return (

          <nav id="sidebar" className="col sidebar bg-dark">
           <Link to="" className="navbar-brand">
              <img src="" alt="" className="logo"/>
           </Link>
            <ul className="nav flex-column vertical-nav">
              <li className="nav-item">
               <Link to=""className="nav-link active" aria-current="page" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-speedometer2" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                    <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                  </svg> Dashboard     
               </Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-product"className="nav-link" > Products</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-category"className="nav-link" > Categories</Link>
              </li>
              <li className="nav-item">
               <Link to=""className="nav-link" > Sales</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-user" className="nav-link" > 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>   Users 
               </Link>
              </li>
              <li className="nav-item">
               <Link to=""className="nav-link" >Reports</Link>
              </li>
              <li className="nav-item">
               <Link to=""className="nav-link" >Notifications</Link>
              </li>
              <li className="nav-item">
               <Link to=""className="nav-link" >Suppliers</Link>
              </li>
              
            </ul>

          </nav>
    );
  }
}