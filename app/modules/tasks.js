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
      <div>
        <h1>{this.props.params.institution}</h1>
        <p>Select a task.</p>
        {/* TODO: make the select load dynamically */}
        <select
          value={this.state.task}
          onChange={this.handleTaskChange}
        >
          <option value="NOAA CSV">NOAA CSV</option>
          <option value="Test">Test</option>
        </select>
        <div>
          <h2>{this.state.task}</h2>
          <p className="temporary">A brief description of the task is given here.</p>
        </div>
        <Link to="/">Test</Link>
      </div>
    );
  }
});
