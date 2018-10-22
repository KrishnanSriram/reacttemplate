import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './pages/about';
import ContactUs from './pages/contactus';
import Dashboard from './pages/dashboard';
import Help from './pages/help';
import Home from './pages/home';
import InvalidPage from './pages/invalidpage';
import Navbar from "./components/navbar";
import Register from './pages/register';
import Login from './pages/login';

const App = () => (
  <Router>
    <div>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard/:user_id" component={Dashboard} />
            <Route component={InvalidPage} />
        </Switch>
    </div>
  </Router>
);

export default App;