import React from "react";
import { Link } from 'react-router-dom';

//  This is a functional component
const User = (props) => (
    
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>
    <td>{props.user.userType}</td>
    
    <td>
      <Link to={"/shop/edit-user/" + props.user._id}> Edit</Link> |{" "}
      <a
        href="#"
        onClick={ () => {
          props.deleteUser(props.user._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default User;