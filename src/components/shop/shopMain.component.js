import { BrowserRouter as Router, Route} from "react-router-dom";
import './styles.css';


// Importing components
import Navbar from "./navbar.component";
import Sidebar from "./sidebar.component";
import AddUser from "./add-user.component";
import AddCategory from "./add-category.component";
import AddProduct from "./add-product.component";
import ProductsList from "./productList.component";
import CategoryList from "./categoryList";
import UsersList from "./userList.component";
import EditUser from "./edit-user.component";
import EditProduct from "./edit-product.component";
import AddBill from "./add-bill.component";
import Dashboard from "./dashboard.component";
import AddSupplier from "./add-supplier";
import SendOrder from "./sendOrder";

function Shop() {
  return (    
    <Router>
          
        <Navbar/>
        <div class="row">
            <div className="col-3"> 
                <Sidebar/>
            </div>
            <div className="col-9">
                <Route path="/shop/add-user" component={AddUser} />
                <Route path="/shop/add-category" component={AddCategory} />
                <Route path="/shop/add-product"  component= {AddProduct} />
                <Route path="/shop/product-list"  component= {ProductsList} />
                <Route path="/shop/prodCategory-list"  component= {CategoryList} />
                <Route path="/shop/user-list"  component= {UsersList} />
                <Route path="/shop/edit-user/:id" component={EditUser} />
                <Route path="/shop/edit-product/:id" component={EditProduct} />
                <Route path="/shop/add-bill" component={AddBill} />
                <Route path="/shop/dashboard" component={Dashboard} />
                <Route path="/shop/add-supplier" component={AddSupplier} />
                <Route path="/shop/send-order" component={SendOrder} />

            </div>
        </div>

        <br/>        
        
        {/* <Route path="/customer/landing" component={Landing} />
        <Route path="/customer/signup" component={Signup} />
        <Route path="/customer/login" component={Login} /> */}
        <br/>
        <br/>      

        
        {/* <Route path="/customer" component={Customer} />
        <Route path="/shop" component={Shop} /> */}
    </Router>      
  );
}

export default Shop;
