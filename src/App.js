
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shop from './Components/Shop/Shop';
import Review from './Components/Order/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
  
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route  path="/shop">
            <Shop></Shop>
          </Route>
          <Route  exact path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          
          <Route  path="/register">
            <Register></Register>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <Route  path="*">
          <NotFound></NotFound>
          </Route>
          
        </Switch>
      </Router>
  
      <Footer></Footer>
    </div>
  );
}

export default App;
