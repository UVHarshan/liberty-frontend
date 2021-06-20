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
               <Link to="/shop/dashboard"className="nav-link active" aria-current="page" href=""> Dashboard</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-product"className="nav-link" > Add Products</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/product-list"className="nav-link" > Manage Products</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-category"className="nav-link" > Add Categories</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/prodCategory-list"className="nav-link" > Manage Categories</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-bill"className="nav-link" > Manage Sales</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-user" className="nav-link" > Add Users</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/user-list"className="nav-link" > Manage Users</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/add-supplier"className="nav-link" >Add Suppliers</Link>
              </li>
              <li className="nav-item">
               <Link to="/shop/send-order"className="nav-link" >Send Order</Link>
              </li>
              <li className="nav-item">
               <Link to=""className="nav-link" >Reports</Link>
              </li>
              <li className="nav-item">
               <Link to=""className="nav-link" >Notifications</Link>
              </li>
            
              
            </ul>

          </nav>
    );
  }
}