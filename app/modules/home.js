import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to MARS!</h1>
          <Link to="/login">Get Started</Link>
      </div>
    );
  }
});
