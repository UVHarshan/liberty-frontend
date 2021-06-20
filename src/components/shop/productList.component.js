import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";    // Axios is used to connect front-end to the back-end
import Product from './product.component';


//This is a class component for rendering a list of items from the database
export default class ProductsList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteProduct = this.deleteProduct.bind(this);
  
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
  
    //Code for deleting exercises
    deleteProduct(id) {
      axios.delete("http://localhost:5000/products/" + id).then((response) => {
        console.log(response.data);
      });
  
      // Setting the state by assigning elements unless the deleted element
      this.setState({
        products: this.state.products.filter((el) => el._id !== id), // Filtering the exercises array
      });
    }
  
    productList() {
      return this.state.products.map((currentproduct) => {
        return (
          <Product
            product={currentproduct}
            deleteProduct={this.deleteProduct}
            key={currentproduct._id}
          />
        );
      });
    }
  
    render() {
      return (
        <div>
          <h3> Logged Products</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Brand</th>
                <th>Item</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.productList()}</tbody>
          </table>
        </div>
      );
    }
  }