import React, { Component } from 'react';
import { Menu, Description } from './components';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {

    const helloArticle = () => (<Description articlePath="about.html" />);
    const projectsArticle = () => (<Description articlePath="projects.html" />);
    const contactArticle = () => (<Description articlePath="contact.html" />);
    const pages = ["hello", "projects", "contact"];
    
    return (
      <div className="App">
       <Router>
         <div className="ContentSection">
           <div className="Header">
              <h1>Dmitry Pimenov</h1>
              <Menu pages={pages}/>
            </div>
            <div className="Main">
              <Route exact path="/" render={() => (
                  <Redirect to="/hello"/>
              )}/>
              <Route exact path={"/hello"} render={helloArticle} />
              <Route exact path={"/projects"} render={projectsArticle} />
              <Route exact path={"/contact"} render={contactArticle} />
            </div>
            </div>
        </Router>
     </div>
    );
  }
}

export default App;
