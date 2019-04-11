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
    this.startSlider = React.createRef();
    this.endSlider = React.createRef();
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

  componentDidUpdate(prevProps, prevState) {
    const { startMax, endMin } = this.state;
    console.log('Update', this.startSlider.current.max);
    if (prevState.startMax !== startMax) {
      console.log(startMax, prevState.startMax)
    }
    if (prevState.endMin !== endMin) {
      console.log(endMin, prevState.endMin);
    }
    // console.log(prevState.endMin, endMin);
    // console.log(prevState.startMax, startMax);
    // if (prevState.startMax !== startMax || prevState.endMin !== endMin) {
    //   console.log('update');
    // }
    console.log('StartMax', startMax, 'EndMin', endMin);
  }

  render() {
    const {
      value,
      onChange,
      step,
    } = this.props;

    const update = (ev) => {
      const { name, id, value } = ev.target;
      console.log(name, id, value);
      onChange(ev);
      let pivot;
      if (id === 'a' && value >= Number(this.state.startMax)) {
        // Math.min returns the lowest value passed to it
        // this.props.max - 1 (potentially 0) or 
        pivot = Math.min(this.props.max - 1, Number(this.state.startMax) + 1, 1);
        this.setState({
          startMax: pivot,
          endMin: pivot - 1,
        });
      }
      if (id === 'b' && value <= Number(this.state.endMin)) {
        pivot = Math.max(this.props.min, Number(this.state.endMin) - 1, 2)
        this.setState({
          startMax: pivot - 1,
          endMin: pivot,
        });
      }
      console.log('StartMax', this.state.startMax, 'EndMin', this.state.endMin);
      // if (pivot) {
      //   this.setState({
      //     startMax: pivot,
      //     endMin: pivot - 1,
      //   }, null);
      // }
    }

    return (
      <div className="slideContainer">
        <input ref={this.startSlider} id="a" type="range" min={this.props.min} max={this.state.startMax} step={step} value={value.start} name="start" onChange={update} />
        <input ref={this.endSlider} id="b" type="range" min={this.state.endMin} max={this.props.max} step={step} value={value.end} name="end" onChange={update} />
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