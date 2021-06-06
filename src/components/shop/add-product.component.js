import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios'


export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    // Method Binding
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // This is just like a variable declaration
    this.state = {
      brand: "",
      item: "",
      category: "",
      price: "",
      quantity: "",
      categories: []
    };
  }

  // This is a life cycle method
  componentDidMount() {
    axios.get("http://localhost:5000/prodCategories").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          categories: response.data.map((catg) => catg.category),
          category: response.data[0].category
        });
      }
    });
  }




  onChangeBrand(e) {
    console.log(this.state.brand)
    this.setState({
      brand: e.target.value,
    });
  }

  onChangeItem(e) {
    console.log(this.state.item)
    this.setState({
      item: e.target.value,
    });
  }

  onChangeCategory(e) {
    console.log(this.state.category)
    this.setState({
      category: e.target.value,
    });
  }

  onChangePrice(e) {
    console.log(this.state.price)
    this.setState({
      price: e.target.value,
    });
  }

  onChangeQuantity(e) {
    console.log(this.state.quantity)
    this.setState({
      quantity: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault(); // What is the usage??????

    const product = {
      brand: this.state.brand,
      item: this.state.item,
      category: this.state.category,
      price: this.state.price,
      quantity: this.state.quantity
    };

    console.log(product);

    // connecting frontend to the backend using axios( Passing the newly created customer object to the server end-point)
    axios
      .post("http://localhost:5000/products/add", product)
      .then((res) => console.log(res.data));

    // window.location = "/shop/add-product";
  }


  render() {
    return (
      <div className="container-fluid pt-4 pb-4">
        <div className="add-product card bg-light">
          <div className="card-body">
            <center>  <h1> Add Product </h1> </center>
            <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                  <label for="exampleInputCategory" className="form-label"> Category </label>
                  <select
                    ref="userInput"
                    required
                    className="form-control"
                    value={this.state.category}
                    onChange={this.onChangeCategory}
                  >
                    {this.state.categories.map(function (cat) {
                      return (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      );
                    })}
                  </select>
                </div>
              <div className="mb-3">
                <label for="exampleInputBrand" className="form-label"> Brand</label>
                <input type="text" className="form-control" id="exampleInputBrand" value={this.state.brand} onChange={this.onChangeBrand} aria-describedby="brandHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputBrand" className="form-label"> Item </label>
                <input type="text" className="form-control" id="exampleInputBrand" value={this.state.item} onChange={this.onChangeItem} aria-describedby="brandHelp" />
              </div>
              
              <div className="mb-3">
                <label for="exampleInputPrice" className="form-label"> Price </label>
                <input type="text" className="form-control" id="exampleInputPrice" value={this.state.price} onChange={this.onChangePrice} aria-describedby="brandHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputDescription" className="form-label"> Quantity </label>
                <input type="text" className="form-control" id="exampleInputDescription" value={this.state.quantity} onChange={this.onChangeQuantity} aria-describedby="brandHelp" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>


    );
  }
}