import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


// Importing components
import Footer from "./components/footer.component";
import Navbar from "./components/navbar.component";
import Signup from "./components/signup.component";
import Login from "./components/login.component";
import Landing from "./components/landing.component";

function App() {
  return (    
    <Router>
      <div class="container-fluid">
        <Navbar/>
        <br/>        
        <Landing/>
        
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />


        <Footer/>
      </div>    

    </Router>

    
   
  );
}

export default App;
