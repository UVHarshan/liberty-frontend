import { BrowserRouter as Router, Route} from "react-router-dom";
//import './App.css';


// Importing components
import Footer from "./footer.component";
import Navbar from "./navbar.component";
import Signup from "./signup.component";
import Login from "./login.component";
import Landing from "./landing.component";

function Customer() {
  return (    
    <Router>
      <div class="container-fluid">
        <Navbar/>
        <br/>        
        
        <Route path="/customer/landing" component={Landing} />
        <Route path="/customer/signup" component={Signup} />
        <Route path="/customer/login" component={Login} />
        <br/>
        <br/>
        <Footer/>

        
        {/* <Route path="/customer" component={Customer} />
        <Route path="/shop" component={Shop} /> */}
      </div>    

    </Router>   
   
  );
}

export default Customer;
