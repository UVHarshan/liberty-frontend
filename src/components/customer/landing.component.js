import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import anchor from './images/anchor-butter.jpg';
import nesto from './images/nesto.jpg'
import raththi from './images/raththi.jpg'
import anchorMilk from './images/anchor.jpg'
import choco from './images/choco.jpg'
import ginger from './images/ginger.jpg'
import short from './images/shortcake.jpg'
import cream from './images/cream.jpg'
import beans from './images/beans.jpg'
import brinjal from './images/brinjal.jpg'
import carrot from './images/carrot.jpg'
import onion from './images/onions.jpg'

// Importing components
import Carousal from "./carousal.component";


export default class Landing extends Component {

  render() {
    return (
        
        <section>
            {<Carousal/>}
            <br/>
        <div className="row mt-4">   
        <h1 className="text-center"> Diary Products </h1>
        <div className="col-3">
            <div className="card">
                <img src={anchor} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Anchor Butter</h5>
                    <p className="card-text"> Rs. 315.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src={nesto} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nestomolt 400g</h5>
                    <p className="card-text"> Rs. 360.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={raththi} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Raththi 400g</h5>
                    <p className="card-text"> Rs. 325.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src={anchorMilk} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Anchor Milk 400g</h5>
                    <p className="card-text"> Rs. 450.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
    </div>


    <div className="row mt-4">   
        <h1 className="text-center"> Grocery Items </h1>
        <div className="col-3">
            <div className="card">
                <img src={choco} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Munchee Chocolate Biscuits</h5>
                    <p className="card-text"> Rs. 40.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src={ginger} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Munchee Ginger</h5>
                    <p className="card-text"> Rs. 45.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={short} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Munchee ShortCake</h5>
                    <p className="card-text"> Rs. 65.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src={cream} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> Munchee</h5>
                    <p className="card-text"> Rs. 315.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
    </div>  

    <div className="row mt-4">   
        <h1 className="text-center"> Vegetables </h1>
        <div className="col-3">
            <div className="card">
                <img src={beans} className="card-img-top" alt="..." style={{height:"320px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Beans 500g</h5>
                    <p className="card-text"> Rs. 315.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src={brinjal} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Brinjal 500g</h5>
                    <p className="card-text"> Rs. 315.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={carrot} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Carrot 500g </h5>
                    <p className="card-text"> Rs. 455.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" >
                <img src={onion} className="card-img-top" alt="..." style={{height:"320px"}}/>
                <div className="card-body">
                    <h5 className="card-title"> Onions 500g</h5>
                    <p className="card-text"> Rs. 315.00 </p>
                    <Link to="#" className="btn btn-primary"> Add to Cart </Link >
                </div>
            </div>
        </div>
    </div>    

    </section>
                
      
    );
  }
}