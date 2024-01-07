import './App.css';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import Fooditm from './screens/Fooditm.js';
import MyOrders from './screens/MyOrders.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { CartProvider } from './components/ContexReducer.js';



function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/createuser" element={<Signup />}></Route>
            <Route exact path="/createfooitm" element={<Fooditm />}></Route>
            <Route exact path="/myorders" element={<MyOrders />}></Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>

  );
}

export default App;
