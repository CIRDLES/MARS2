import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="iconbar"></span>
                <span className="iconbar"></span>
              </button>
              <span className="navbar-brand" href="#">CIRDLES</span>
            </div>

            <div className="collapse navbar-collapse" id="menu">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" fole="button" aria-haspopup="true" aria-expanded="false">Settings</a>
                  <ul className="dropdown-menu">
                    <li><Link to="/home">Home</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children}
      </div>
    );
  }
});
