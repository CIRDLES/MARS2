'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

// Route Module Components
import GeopassLogin from './modules/geopass-login'
import Home from './modules/home'
import Institution from './modules/institution'
import Tasks from './modules/tasks'
import Menu from './modules/menu'
import Upload from './modules/upload'

// Business Logic
import reducer from './reducer'

ReactDOM.render(
  (
      <Router history={hashHistory}>
        <Route path="/" component={Menu}>
          <IndexRoute component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={GeopassLogin}/>
          <Route path="/institution" component={Institution}/>
          <Route path="/:institution/tasks" component={Tasks}/>
          <Route path="/upload" component={Upload}/>
        </Route>
      </Router>
  ),
  document.getElementById('content')
);
