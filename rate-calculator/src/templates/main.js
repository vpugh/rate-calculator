import React, { Component } from 'react';
import './templates.scss';
import Slider from '../inputs/slider/slider';
import DoubleSlider3 from '../inputs/doubleSlider/doubleSlider3';

class HomeTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
      double: {
        start: 1,
        end: 50,
      },
      third: {
        lowerVal: 1,
        upperVal: 50,
        min: 1,
        max: 50,
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

  onChange2 = (name, value) => {
    this.setState({ third: { ...this.state.third, [name]: value }});
  }

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
        <p>{this.state.third.lowerVal} {this.state.third.upperVal}</p>
        <DoubleSlider3
          valueUpper={this.state.third.upperVal}
          valueLower={this.state.third.lowerVal}
          onChange={this.onChange2}
          min={this.state.third.min}
          max={this.state.third.max}
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