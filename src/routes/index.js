import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Registration from 'components/Registration';
import Login from 'components/Login';
import Contacts from 'components/Contacts'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/sing-up' component={Registration} />
        <Route exact path='/contacts' components={Contacts} />
      </Switch>
    );
  }
}

export default Routes;
