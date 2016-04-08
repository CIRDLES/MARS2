import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  getInitialState: function() {
    return {task: ''};
  },
  handleTaskChange: function(e) {
    this.setState({task: e.target.value});
  },
  render: function() {
    return (
      <div className='text-center login'>
        <h1 className="sub-title">{this.props.params.institution}</h1>
        <div className="box container">
          <div className="col-sm-6">
          <p>Select a task.</p>
          <form>
            {/* TODO: make the select load dynamically */}
            <div className="form-group">
              <select
                value={this.state.task}
                onChange={this.handleTaskChange}
              >
                <option value="NOAA CSV">NOAA CSV</option>
                <option value="Test">Test</option>
              </select>
            </div>
            <Link className="btn btn-warning" to="/institution">Back</Link>
            <Link className="btn btn-warning" to="/upload">Select</Link>
          </form>
          </div>
          <div className="col-sm-6">
            <h2>{this.state.task}</h2>
            <p className="temporary">A brief description of the task is given here.</p>
          </div>
        </div>
      </div>
    );
  }
});
