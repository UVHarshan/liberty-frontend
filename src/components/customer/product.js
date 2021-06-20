import React from "react";
import { Link } from 'react-router-dom';

//  This is a functional component( Receiving props from the ProductList component)
const Product = (props) => ( 

    <div className="col-3">
    <div className="card" >
    {/* <img src={nesto} className="card-img-top" alt="..."/> */}
    <div className="card-body">
        <h5 className="card-title"> {props.product.brand} {props.product.item}  </h5>
        <p className="card-text">{props.product.price}</p>
        <Link to="#" className="btn btn-primary"> Add to Cart </Link >
    </div>
    </div>
    </div>






    // <tr>
    //   <td>{props.product.brand}</td>
    //   <td>{props.product.item}</td>
    //   <td>{props.product.category}</td>
    //   <td>{props.product.price}</td>
    //   <td>{props.product.quantity}</td>
    //   <td>
    //     <Link to={"/shop/edit-product/" + props.product._id}>Edit</Link> |{" "}
    //     <a
    //       href="#"
    //       onClick={ () => {
    //         props.deleteProduct(props.product._id);
    //       }}
    //     >
    //       Delete
    //     </a>
    //   </td>
    // </tr>
);

export default Product;