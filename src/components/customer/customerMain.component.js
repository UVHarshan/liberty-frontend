import { BrowserRouter as Router, Route} from "react-router-dom";
//import './App.css';

// Importing components
import Footer from "./footer.component";
import Navbar from "./navbar.component";
import Signup from "./signup.component";
import Login from "./login.component";
import Landing from "./landing.component";
import DairyProductsList from "./dairyProductList";
import GroceryProductsList from "./groceryProductsList";
import HHoldProductsList from "./householdProductsList";

function Customer() {
  return (    
    <Router>
    
        <Navbar/>
        <br/>        
        
        <Route path="/customer/landing" component={Landing} />
        <Route path="/customer/signup" component={Signup} />
        <Route path="/customer/login" component={Login} />
        <Route path="/customer/dairyProducts" component={DairyProductsList} />
        <Route path="/customer/groceryProducts" component={GroceryProductsList} />
        <Route path="/customer/household" component={HHoldProductsList} />


        <br/>
        <br/>
        <Footer/>

        
        {/* <Route path="/customer" component={Customer} />
        <Route path="/shop" component={Shop} /> */}
    

    </Router>   
   
  );
}

export default Customer;
