import React, { Component } from "react";
import axios from "axios";    // Axios is used to connect front-end to the back-end
import Product from './product';


//This is a class component for rendering a list of items from the database
export default class HHoldProductsList extends Component {
    constructor(props) {
      super(props);  
    
      this.state = { products: [] };
    }
  
    // Retrieving products from the database( This is a life cycle method)
    componentDidMount() {
      axios
        .get("http://localhost:5000/products/")
        .then((response) => {
          this.setState({ products: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  
    productList() {
        console.log(this.state.products)
        const hHold = this.state.products.filter( product => product.category == 'Household')
        
      return hHold.map((currentproduct) => {
        return (
          <Product
            product={currentproduct}
            key={currentproduct._id}
          />
        );
      });
      
    }
  
    render() {
      return (
        <div className="row">          
            {this.productList()}     
        </div>
      );
    }
  }