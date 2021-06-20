import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Signup extends Component {
    constructor(props) {
        super(props);
    
        // Method Binding
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // This is just like a variable declaration
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          passsword:""
        };
    }

    onChangeFirstname(e) {
        console.log(this.state.firstName)
        this.setState({
          firstName: e.target.value,
        });
    }

    onChangeLastname(e) {
        console.log(this.state.lastName)
        this.setState({
          lastName: e.target.value,
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

    onChangePassword(e) {
        console.log(this.state.password)
        this.setState({
          password: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault(); // What is the usage??????
    
        const customer = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          mobile: this.state.mobile,
          password: this.state.password
        };
    
        console.log(customer);
    
        // connecting frontend to the backend using axios( Passing the newly created customer object to the server end-point)
        axios
          .post("http://localhost:5000/customers/add", customer)
          .then((res) => console.log(res.data));
    
        window.location = "/customer/signup";
    }

    render() {
        return (
            <section className="pt-4">            
                <div className="signup card mx-auto" >
                   <center> <h1> Create an account </h1> </center> 
                    <div className="card-body">
                        <form onSubmit={this.onSubmit} >
                            <div className="mb-3">
                                <label for="exampleInputFName" className="form-label"> First Name</label>
                                <input type="text" required  className="form-control" value={this.state.firstName}  onChange={this.onChangeFirstname} id="exampleInputFName"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputLName" className="form-label"> Last Name</label>
                                <input type="text" className="form-control" value={this.state.lastName}  onChange={this.onChangeLastname} id="exampleInputLName" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email}  onChange={this.onChangeEmail} aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputMobile" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" id="exampleInputMobile"  value={this.state.mobile}  onChange={this.onChangeMobile} aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"  value={this.state.password}  onChange={this.onChangePassword} />
                            </div>                        
                            <button type="submit" className="btn btn-primary"> Create an account! </button>
                        </form>
                    </div>
                </div>
            </section>
            
        
        );
    }
}