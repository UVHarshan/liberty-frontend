import React from "react";
import { Link } from 'react-router-dom';

//  This is a functional component
const Product = (props) => ( 
    <tr>
      <td>{props.product.brand}</td>
      <td>{props.product.item}</td>
      <td>{props.product.category}</td>
      <td>{props.product.price}</td>
      <td>{props.product.quantity}</td>
      <td>
        <Link to={"/shop/edit-product/" + props.product._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={ () => {
            props.deleteProduct(props.product._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
);

export default Product;