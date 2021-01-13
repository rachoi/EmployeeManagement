import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import NavigationBarComponent from './Components/NavigationBarComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import Login from './Components/Login';
import Home from './Components/Home';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';
import ClockInOrOut from './Components/ClockInOrOut';

function App() {
  return (
    <div>
        <Router>
              <NavigationBarComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {Home}/>
                          <Route path = "/employees" exact component = {ListEmployeeComponent}/>
                          <Route path = "/employees/config/:id" exact component = {CreateEmployeeComponent}/>
                          <Route path = "/employees/info/:id" exact component = {ViewEmployeeComponent}/>
                          <Route path = "/login" exact component={Login}/>
                          <Route path = "/user/:id" exact component = {ClockInOrOut}/>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
