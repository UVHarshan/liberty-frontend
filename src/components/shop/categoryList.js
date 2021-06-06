import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";    // Axios is used to connect front-end to the back-end
import Category from './category';


//This is a class component for rendering a list of items from the database
export default class CategoryList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteCategory = this.deleteCategory.bind(this);
  
      this.state = { categories: [] };
    }
  
    // Retrieving products from the database( This is a life cycle method)
    componentDidMount() {
      axios
        .get("http://localhost:5000/prodCategories/")
        .then((response) => {
          this.setState({ categories: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    //Code for deleting exercises
    deleteCategory(id) {
      axios.delete("http://localhost:5000/prodCategories/" + id).then((response) => {
        console.log(response.data);
      });
  
      // Setting the state by assigning elements unless the deleted element
      this.setState({
        categories: this.state.categories.filter((el) => el._id !== id), // Filtering the exercises array
      });
    }
  
    categoryList() {
      return this.state.categories.map((currentcategory) => {
        return (
          <Category
            category={currentcategory}
            deleteCategory={this.deleteCategory}
            // key={currentexercise._id}
          />
        );
      });
    }
  

    render() {
      return (
        <div>
          <h3>Logged Categories</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>                
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.categoryList()}</tbody>
          </table>
        </div>
      );
    }
  }