import React, { Component } from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import App from './App';
import App1 from './App1';

class RouterLink extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/layout" component={App1} />
        </Switch>
      </Router>
    )
  }
}

export default RouterLink;
