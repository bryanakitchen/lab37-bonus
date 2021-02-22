import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import User from '../../containers/User';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={User}
            />
            {/* <Route
              exact path="/:username" 
              component={}
            /> */}
          </Switch>
        </Router>
      </>
    );
  }
}
