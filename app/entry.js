'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router'

// Route Module Components
import GeopassLogin from './modules/geopass-login'
import Home from './modules/home'
import Institution from './modules/institution'
import Tasks from './modules/tasks'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/login" component={GeopassLogin}/>
      <Route path="/institution" component={Institution}/>
      <Route path="/:institution/tasks" component={Tasks}/>
    </Router>
  ),
  document.getElementById('content')
);
