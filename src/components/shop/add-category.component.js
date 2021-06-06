import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AddCategory extends Component {
  constructor(props) {
    super(props);

    // // Method Binding
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // This is just like a variable declaration
    this.state = {
      category: ""
    };
}

onChangeCategory(e) {
    console.log(this.state.category)
    this.setState({
      category: e.target.value,
    });
}

onSubmit(e) {
    e.preventDefault(); // What is the usage??????

    const category = {
      category: this.state.category
    };

    console.log(category);

    // connecting frontend to the backend using axios( Passing the newly created customer object to the server end-point)
    axios
      .post("http://localhost:5000/prodCategories/add", category)
      .then((res) => console.log(res.data));

    window.location = "/shop/add-category";
}




  render() {
    return (
        <div className="container pt-4 pb-4">
            <div className="add-product card bg-light" >
            <div className="card-body">
                <center>  <h1> Add New Category </h1> </center>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                    <label for="exampleInputBrand" className="form-label"> Category</label>
                    <input type="text" className="form-control"  value={this.state.category}  onChange={this.onChangeCategory} id="exampleInputBrand" aria-describedby="brandHelp"/>
                    </div>
                                    
                    <button type="submit" className="btn btn-primary">Add New Category </button>
                </form>               
            </div>
            </div> 
         </div>               
    );
  }
}