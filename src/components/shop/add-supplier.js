import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AddSupplier extends Component {
  constructor(props) {
    super(props);

    // Method Binding
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    // this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // This is just like a variable declaration
    this.state = {
      name: "",
      mobile: "",
      email: ""
    };
  }

  onChangeName(e) {
      console.log(this.state.name)
      this.setState({
        name: e.target.value,
      });
  }

  onChangeEmail(e) {
      console.log(this.state.email)
      this.setState({
        email: e.target.value,
      });
  }

  onChangeMobile(e) {
      console.log(this.state.mobile)
      this.setState({
        mobile: e.target.value,
      });
  }

  onSubmit(e) {
      e.preventDefault(); // What is the usage??????

      const supplier = {
        name: this.state.name,
        mobile: this.state.mobile,
        email: this.state.email
      };

      console.log(supplier);

      // connecting frontend to the backend using axios( Passing the newly created user object to the server end-point)
      axios
        .post("http://localhost:5000/suppliers/add", supplier)
        .then((res) => console.log(res.data));

      // window.location = "/shop/add-product";
  }




  render() {
    return (
        <div className="container-fluid pt-4 pb-4">
        <div className="add-product card bg-light" >
          <div className="card-body">
            <center>  <h1> Add New Supplier </h1> </center>
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <label for="exampleInputBrand" className="form-label"> Name</label>
                  <input type="text" required className="form-control" id="exampleInputBrand" value={this.state.name} onChange={this.onChangeName}  aria-describedby="brandHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputBrand" className="form-label"> Mobile Numer </label>
                    <input type="text" required className="form-control" id="exampleInputBrand" value={this.state.mobile} onChange={this.onChangeMobile} aria-describedby="brandHelp"/>
                </div>
                <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email}  onChange={this.onChangeEmail} aria-describedby="emailHelp"/>
                </div>
                             
                <button type="submit" className="btn btn-primary"> Add </button>
              </form>               
                </div>
             </div> 
          </div>
        
        
    );
  }
}