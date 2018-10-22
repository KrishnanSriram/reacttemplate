import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './pages/about';
import ContactUs from './pages/contactus';
import Dashboard from './pages/dashboard';
import Help from './pages/help';
import Home from './pages/home';
import InvalidPage from './pages/invalidpage';

const App = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>  
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/dashboard/:user_id" component={Dashboard} />
        <Route component={InvalidPage} />
      </Switch>
      
    </div>
  </Router>
);

/*const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);
*/
export default App;