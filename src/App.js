import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Footer from "./component/footer";
import Carosuel from "./component/Carosu";
import './App.css';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div style={{ minHeight: '600px', width: '100%' }}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />  
      </Router>    
    </div>

  );
}
export default App;
