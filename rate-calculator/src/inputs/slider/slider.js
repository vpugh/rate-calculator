import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './slider.scss';

class Slider extends Component {

  render() {
    const {
      value,
      onChange,
      min,
      max,
      sliderName,
      step,
    } = this.props;

    return (
      <div className="slideContainer">
        <input type="range" min={min} max={max} value={value} className="slider" name={sliderName} step={step || null} onChange={onChange} />
      </div>
    );
  }
}

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  sliderName: PropTypes.string.isRequired,
};

export default Slider;