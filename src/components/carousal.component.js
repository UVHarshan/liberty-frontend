import React, { Component } from 'react';
import dairy from '../assets/images/Carousal/Dairy.jpg';
import grocery  from '../assets/images/Carousal/Grocery.png';
import house from '../assets/images/Carousal/Household.jpg';
import vege from '../assets/images/Carousal/Vegetables.jpg';


export default class Carousal extends Component {

  render() {
    return (
        <div className="row"> 
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={dairy} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={grocery} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={house} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={vege} className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>            
        </div>


        
      
    );
  }
}