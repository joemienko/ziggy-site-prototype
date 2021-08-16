import React from "react"; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';
import Navbar from "@components/layout/Navigation/Navbar/Navbar";
import Home from "@views/Home/Home" 
import Gallery from "@views/Gallery/Gallery"
import Schedule from "@views/Schedule/Schedule"
import SignUp from "@views/SignUp/SignUp"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/gallery" exact component={Gallery}/>
          <Route path="/schedule" exact component={Schedule}/>
          <Route path="/sign-up" exact component={SignUp}/>
        </Switch>
      </Router>
    </> 
  );
}

export default App;
