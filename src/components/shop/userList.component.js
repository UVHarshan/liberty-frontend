import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";    // Axios is used to connect front-end to the back-end
import User from './user.component';


//This is a class component for rendering a list of items from the database
export default class UsersList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteUser = this.deleteUser.bind(this);
  
      this.state = { users: [] };
    }
  
    // Retrieving products from the database( This is a life cycle method)
    componentDidMount() {
      axios
        .get("http://localhost:5000/users/")
        .then((response) => {
          this.setState({ users: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    //Code for deleting exercises
    deleteUser(id) {
      axios.delete("http://localhost:5000/users/" + id).then((response) => {
        console.log(response.data);
      });
  
      // Setting the state by assigning elements unless the deleted element
      this.setState({
        users: this.state.users.filter((el) => el._id !== id), // Filtering the users array
      });
    }
  
    usersList() {
      return this.state.users.map((currentuser) => {
        return (
          <User
            user={currentuser}
            deleteUser={this.deleteUser}
            // key={currentexercise._id}
          />
        );
      });
    }
  
    render() {
      return (
        <div>
          <h3>Logged Users</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>User Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody> {this.usersList()} </tbody>
          </table>
        </div>
      );
    }
  }