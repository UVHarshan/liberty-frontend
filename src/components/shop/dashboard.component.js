import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import grocery from './images/grocery.jpg'
import dairy from './images/dairy.jpg'
import vege from './images/vege.jpg'

export default class Dashboard extends Component {

  render() {
    return (
            <div className="row">            
                <div className="col-4 pt-4 pb-4">
                    <div className="card" style={{width: '18rem'}}>
                    <img src={grocery} className="card-img-top" alt="..." style={{height:"190px", width:"250px"}} />
                    <div className="card-body">
                        <h5 className="card-title">Grocery</h5>
                        <p className="card-text"> Rs.50 000</p>
                        <a href="/shop/product-list" className="btn btn-primary">Full Details</a>
                    </div>
                    </div>
                </div>
                <div className="col-4 pt-4 pb-4">
                    <div className="card" style={{width: '18rem'}}>
                    <img src={dairy} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dairy</h5>
                        <p className="card-text"> Rs.60 000</p>
                        <a href="/shop/product-list" className="btn btn-primary">Full Details</a>
                    </div>
                    </div>
                </div>
                <div className="col-4 pt-4 pb-4">
                    <div className="card" style={{width: '18rem'}}>
                    <img src={vege} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> Vegetables</h5>
                        <p className="card-text"> Rs.60 000</p>
                        <a href="/shop/product-list" className="btn btn-primary">Full Details</a>
                    </div>
                    </div>
                </div>
            </div>



         
    );
  }
}