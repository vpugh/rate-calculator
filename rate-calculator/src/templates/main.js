import React, { Component } from 'react';
import './templates.scss';
import Slider from '../inputs/slider/slider';
import DoubleSlider from '../inputs/doubleSlider/doubleSlider';

class HomeTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
      double: {
        start: 4,
        end: 12,
      }
    };
  }

  checkHighlight = name => {
    const { nextSteps } = this.props;
    if (nextSteps.includes(name)) {
      return true;
    } else {
      return false;
    }
  }

  onChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  onDoubleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ double: { ...this.state.double, [name]: value }});
  };
  
  render() {
    const {
      navButtons,
      addSteps,
    } = this.props;

    return (
      <>
        <h3 className="template-title">What can we help you with today?</h3>
        <p className="template-subtitle">Select the options your looking for and fill out the form(s). We'll send you a ballpark figure and a follow-up email.</p>
        <p>{this.state.test}</p>
        <Slider
          value={+this.state.test}
          onChange={this.onChange}
          min={1}
          max={50}
          sliderName="test"
        />
        <p>{this.state.double.start} {this.state.double.end}</p>
        <DoubleSlider
          value={this.state.double}
          onChange={this.onDoubleChange}
          min={1}
          max={50}
          sliderName="double"
        />
        <div className="template-btn-container">
          {navButtons.map(nav => <button key={nav} className={`btn capitalize ${this.checkHighlight(nav) ? 'highlight' : ''}`} name={nav} onClick={addSteps}>{nav}</button>)}
        </div>
      </>
    );
  }
}

export default HomeTemplate;