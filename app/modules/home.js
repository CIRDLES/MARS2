import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <div className="col-lg-12 text-center">
        <h1 className="title">Welcome to MARS!</h1>
          <Link className="btn btn-warning big-button" to="/login">Get Started</Link>
      </div>
    );
  }
});
