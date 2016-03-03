import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  getInitialState: function() {
    return {institution: ''};
  },
  handleInstitutionChange: function(e) {
    this.setState({institution: e.target.value});
  },
  render: function() {
    return (
      <div>
        <h1>Institution</h1>
        <p>Select your institution.</p>
        <form>
          {/* TODO: make the select load dynamically */}
          <select
            value={this.state.institution}
            onChange={this.handleInstitutionChange}
          >
            <option value="Scripps">Scripps</option>
            <option value="Test">Test</option>
          </select>
          <input type="submit" value="Select"/>
        </form>
        <div>
          <h2>{this.state.institution}</h2>
          <p className="temporary">A brief description of the institution is given here.</p>
        </div>

        <div className="temporary">
          <Link to={"/" + this.state.institution + "/tasks"}>Next</Link>
        </div>

      </div>
    );
  }
});
