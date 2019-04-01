import React, { Component } from 'react';
import { RangeSlider } from 'reactrangeslider';
import styles from './styles';

class GeneralTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: '1000',
      budget2: {
        start: 1000,
        end: 5000,
      },
      timeframe: '1',
      startDate: '',
      rushjob: false,
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  onChange = (budget2) => {
    this.setState({ budget2 });
  };

  handleCheckbox = event => {
    this.setState({ rushjob: event.target.checked });
  }

  render() {
    return (
      <>
        <h3 className="template-title">General Work Specifications</h3>
        <p className="template-subtitle">There are some quick questions that will help us create a ballpark figure. Be specific and as detailed as possible.</p>
        <div className="template-body">
          <p>What is your estimated budget? <span>${this.state.budget}</span></p>
          <input type="range" name="budget" min="1000" max="20000" step="1000" value={this.state.budget} onChange={this.handleChange} />
        </div>
        <div className="template-body">
          <p>What is your estimated budget? <span>${this.state.budget2.start} - ${this.state.budget2.end}</span></p>
          <RangeSlider
            step={1000}
            value={this.state.budget2}
            min={1000}
            max={20000}
            onChange={this.onChange}
            wrapperStyle={styles.slider}
            trackStyle={styles.trackStyle}
            highlightedTrackStyle={styles.highlightedTrackStyle}
            handleStyle={styles.handleStyle}
            hoveredHandleStyle={styles.hoveredHandleStyle}
            focusedHandleStyle={styles.focusedHandleStyle}
            activeHandleStyle={styles.activeHandleStyle}
          />
        </div>
        <div className="template-body">
          <p>What is your estimated timeframe? <span>{this.state.timeframe} {this.state.timeframe > 1 ? 'Months' : 'Month'}</span></p>
          <input type="range" name="timeframe" min="1" max="24" step="1" value={this.state.timeframe} onChange={this.handleChange} />
        </div>
        <div className="template-body">
          <p>What is your estimated start date? <span>{this.state.startDate}</span></p>
          <input type="range" name="startDate" min="1000" max="20000" step="1000" value={this.state.startDate} onChange={this.handleChange} />
        </div>
        <div className="template-body">
          <p>Is this a rush job?</p>
          {this.state.rushjob}
          <input type="checkbox" name="" id="" checked={this.state.rushjob} onChange={this.handleCheckbox} />
        </div>
      </>
    );
  }
}

export default GeneralTemplate;