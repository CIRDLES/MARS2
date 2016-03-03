import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>Geopass Login</h1>
        <form>
          <input type="text" value="" placeholder="Username"/>
          <input type="password" value="" placeholder="Password"/>
          <input type="submit" value="Login"/>
        </form>

        <div className="temporary">
          <Link to="/institution">Next</Link>
        </div>

      </div>
    );
  }
});
