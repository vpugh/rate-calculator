import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './doubleSlider3.scss';

class DoubleSlider3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lowerVal: '',
      upperVal: '',
    };
    this.startSlider = React.createRef();
    this.endSlider = React.createRef();
  }

  render() {
    const {
      valueUpper,
      valueLower,
      min,
      max,
    } = this.props;

    const update2 = (ev) => {
      const { id, name, value } = ev.target;
      const { onChange, max } = this.props;
      const lowerValue = this.startSlider.current.value;
      const upperValue = this.endSlider.current.value;
      console.log(lowerValue, upperValue, id);
      onChange(name, value);
      if (id === 'a' && upperValue < lowerValue + 4) {
        onChange('lowerVal', upperValue - 4);
        if (lowerValue === this.startSlider.current.min) {
          onChange('upperVal', 4);
        }
      }
      if (id === 'b' && lowerValue > upperValue - 4) {
        onChange('upperValue', lowerValue + 4);
        if (upperValue === this.endSlider.current.max) {
          onChange('lowerValue', max - 4);
        }
      }
    }

    return (
      <div className="slideContainer">
        <input ref={this.startSlider} id="a" type="range" min={min} max={max} step={1} value={valueLower} name="lowerVal" onChange={update2} />
        <input ref={this.endSlider} id="b" type="range" min={min} max={max} step={1} value={valueUpper} name="upperVal" onChange={update2} />
      </div>
    );
  }
}

DoubleSlider3.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  sliderName: PropTypes.string.isRequired,
};

export default DoubleSlider3;