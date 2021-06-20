import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

const OrderedProduct = (props) => {
  return(
  <tr>
    <td>{props.product.brand}</td>
    <td>{props.product.item}</td>
    <td>{props.product.price}</td>
    <td>{props.product.quantity}</td>
    <td>{parseInt(props.product.price)* parseInt(props.product.quantity)}</td>
  </tr>
  )

    {/* <td>
        <Link to={"/edit/" + props.exercise._id}> edit</Link> |{" "}
        <a
          href="#"
          onClick={ () => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          delete
        </a>
      </td> */}
  
    }

export default class AddBill extends Component {
  constructor(props) {
    super(props);

    // Method Binding
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.productList = this.productList.bind(this);

    // This is just like a variable declaration
    this.state = {
      brand: "",
      item: "",
      price: "",
      quantity: "",
      payoutItem: [],
      netTotal: '0'
    };
  }

  // This is a life cycle method
  //   componentDidMount() {
  //     axios.get("http://localhost:5000/prodCategories").then((response) => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           categories: response.data.map((catg) => catg.category),
  //           category: response.data[0].category
  //         });
  //       }
  //     });
  //   }

  onChangeBrand(e) {
    // console.log(this.state.brand);
    this.setState({
      brand: e.target.value,
    });
  }

  onChangeItem(e) {
    // console.log(this.state.item);
    this.setState({
      item: e.target.value,
    });
  }

  onChangeCategory(e) {
    // console.log(this.state.category);
    this.setState({
      category: e.target.value,
    });
  }

  onChangePrice(e) {
    // console.log(this.state.price);
    this.setState({
      price: e.target.value,
    });
  }

  onChangeQuantity(e) {
    // console.log(this.state.quantity);
    this.setState({
      quantity: e.target.value,
    });
  }

  productList() {
    return this.state.payoutItem.map((currentproduct, index) => {
      return <OrderedProduct product={currentproduct} key={index} />;
    });
  }



  onSubmit(e) {
    e.preventDefault(); // What is the usage??????
    
    let total = parseInt(this.state.netTotal) + parseInt(this.state.price)*parseInt(this.state.quantity)
    
    const product = {
      brand: this.state.brand,
      item: this.state.item,
      price: this.state.price,
      quantity: this.state.quantity,
    };
    let arr = this.state.payoutItem
    arr.push(product)
    // this.setState({...this.state, payoutItem: arr})
    this.setState({
      brand: "",
      item: "",
      price: "",
      quantity: "",
      payoutItem: arr,
      netTotal: total
    })
    // this.state.payoutItem.push(product);

    console.log(this.state.payoutItem);

    // this.productList();

    // connecting frontend to the backend using axios( Passing the newly created customer object to the server end-point)
    // axios
    //   .post("http://localhost:5000/products/add", product)
    //   .then((res) => console.log(res.data));

    // window.location = "/shop/add-product";
  }

  render() {
    return (
      <div className="container-fluid pt-4 pb-4">
        <div className="add-bill card bg-light">
          <div className="card-body">
            <center>
              {" "}
              <h3> Create Bill </h3>{" "}
            </center>
            <form onSubmit={this.onSubmit}>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Brand
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    value={this.state.brand}
                    onChange={this.onChangeBrand}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Item
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    value={this.state.item}
                    onChange={this.onChangeItem}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Price
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Quantity
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    value={this.state.quantity}
                    onChange={this.onChangeQuantity}
                  />
                </div>
              </div>
              <div className="text-center">
              <button type="submit" className="btn btn-dark px-3">
                Add
              </button>
              </div>
            </form>
          </div>

          <div>
            <center> <h3> Logged Products</h3> </center>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Brand</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>{this.productList()}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Net Total : </td>
                <td>{this.state.netTotal}</td>
              </tr>
              </tbody>
            </table>
            <button onClick="" className="btn btn-dark">Create Bill</button>
          </div>

        </div>
      </div>
    );
  }
}
