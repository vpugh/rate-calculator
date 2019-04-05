import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './doubleSlider.scss';

class DoubleSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startMin: '',
      startMax: '',
      endMin: '',
      endMax:'',
    };
  }

  componentDidMount() {
    const { min, max } = this.props;
    this.setState({
      min,
      startMax: (max / 2) - 1,
      endMin: (max / 2),
      max,
    }, null);
  }

  componentDidUpdate(prevState) {
    const { startMax, endMin } = this.state;
    console.log(prevState.endMin, endMin);
    console.log(prevState.startMax, startMax);
    if (prevState.startMax !== startMax || prevState.endMin !== endMin) {
      console.log('update');
    }
  }

  render() {
    const {
      value,
      onChange,
      step,
    } = this.props;

    const {
      min,
      startMax,
      endMin,
      max,
    } = this.state;

    const update = (ev) => {
      const { name, id, value } = ev.target;
      console.log(name, id, value);
      let pivot;
      if (id === 'a' && value >= Number(startMax)) {
        pivot = Math.min(max - 1, Number(startMax) + 1);
        console.log('A Pivot', pivot);
      }
      if (id === 'b' && value <= Number(endMin)) {
        pivot = Math.max(min, Number(endMin) - 2)
        console.log('B Pivot', pivot);
      }
      if (pivot) {
        this.setState({
          startMax: pivot,
          endMin: pivot - 1,
        }, null);
      }
      onChange(ev);
    }

    return (
      <div className="slideContainer">
        <input id="a" type="range" min={min} max={startMax} step={step} value={value.start} name="start" onChange={update} />
        <input id="b" type="range" min={endMin} max={max} step={step} value={value.end} name="end" onChange={update} />
      </div>
    );
  }
}

DoubleSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  sliderName: PropTypes.string.isRequired,
};

export default DoubleSlider;