import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AddUser extends Component {
  constructor(props) {
    super(props);

    // Method Binding
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    // this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // This is just like a variable declaration
    this.state = {
      name: "",
      username: "",
      password: "",
      userType: ""
    };
  }

  onChangeName(e) {
      console.log(this.state.name)
      this.setState({
        name: e.target.value,
      });
  }

  onChangeUsername(e) {
      console.log(this.state.username)
      this.setState({
        username: e.target.value,
      });
  }

  onChangePassword(e) {
      console.log(this.state.password)
      this.setState({
        password: e.target.value,
      });
  }

  onChangeUserType(e) {      
      this.setState({
        userType: e.target.value,
      });
      console.log(this.state.userType)
  }

  onSubmit(e) {
      e.preventDefault(); // What is the usage??????

      const user = {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        userType: this.state.userType
      };

      console.log(user);

      // connecting frontend to the backend using axios( Passing the newly created user object to the server end-point)
      axios
        .post("http://localhost:5000/users/add", user)
        .then((res) => console.log(res.data));

      // window.location = "/shop/add-product";
  }




  render() {
    return (
        <div className="container-fluid pt-4 pb-4">
        <div className="add-product card bg-light" >
          <div className="card-body">
            <center>  <h1> Add New User </h1> </center>
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <label for="exampleInputBrand" className="form-label"> Name</label>
                  <input type="text" required className="form-control" id="exampleInputBrand" value={this.state.name} onChange={this.onChangeName}  aria-describedby="brandHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputBrand" className="form-label"> Username </label>
                    <input type="text" required className="form-control" id="exampleInputBrand" value={this.state.username} onChange={this.onChangeUsername} aria-describedby="brandHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" required className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChangePassword} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">User Type</label>    
                    <select className="form-select" aria-label="Default select example" value={this.state.userType} onChange={this.onChangeUserType}>
                        <option value="admin">Admin</option>
                        <option value="cashier">Cashier</option>
                    </select> 
                </div>                
                <button type="submit" className="btn btn-primary"> Add New User</button>
              </form>               
                </div>
             </div> 
          </div>
        
        
    );
  }
}