import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <div className="login text-center">
        <h1 className="sub-title">Geopass Login</h1>
        <form className="box login-box container">
          <div className="form-group">
            <label></label>
            <input id="username" type="text" value="" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label></label>
            <input id="password" type="password" value="" placeholder="Password"/>
          </div>
          <div className="form-group">
            <Link className="btn btn-warning" to="/">Back</Link>
            <Link className="btn btn-warning" to="/institution">Next</Link>
          </div>
        </form>

      </div>
    );
  }
});
