import { BrowserRouter as Router, Route} from "react-router-dom";
//import './App.css';

// Importing components( Should import Customer and Shop main components only)
import Customer from "./components/customer/customerMain.component";
import Shop from "./components/shop/shopMain.component";

function App() {
  return (    
    <Router>
                   
        <Route path="/customer" component={Customer} />
        <Route path="/shop" component={Shop} />
    

    </Router>    
   
  );
}

export default App;
