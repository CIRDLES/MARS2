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
      <div className="text-center login">
        <h1 className="sub-title">Upload CSV</h1>
        <div className="box">
          <div className="col-sm-6">
            <form>
              {/* TODO: make the select load dynamically */}
              <div className="form-group">
                <input type="file" id="input"/>
              </div>
              <Link className="btn btn-warning" to="/scripps/task">Back</Link>
              <Link className="btn btn-warning" to={"/" + this.state.institution + "/tasks"}>Select</Link>
            </form>
          </div>
          <div className="col-sm-6">
            <p>Size: </p>
            <p>Number of Entries: </p>
          </div>
        </div>
      </div>
    );
  }
});
