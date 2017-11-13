import React, { Component } from 'react';
import { Menu, Description } from './components';
import { Descriptions } from './descriptions'
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
const pages = ["hello", "projects", "contact"];

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <div className="ContentSection">
           <div className="Header">
              <h2>Dmitry Pimenov</h2>
              <Menu pages={pages}/>
            </div>
            <div className="Main">
              <Route exact path="/" render={() => (
                  <Redirect to="/hello"/>
              )}/>
              <Route exact path={"/hello"} render={()=><Description text={Descriptions["hello"]}/>}/>
              <Route exact path={"/projects"} render={()=><Description text={Descriptions["projects"]}/>}/>
              <Route exact path={"/contact"} render={()=><Description text={Descriptions["contact"]}/>}/>
            </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
