import React, { Component } from 'react';
import './templates.scss';

class HomeTemplate extends Component {

  checkHighlight = name => {
    const { nextSteps } = this.props;
    if (nextSteps.includes(name)) {
      return true;
    } else {
      return false;
    }
  }
  
  render() {
    const {
      navButtons,
      addSteps,
    } = this.props;

    return (
      <>
        <h3 className="template-title">What can we help you with today?</h3>
        <p className="template-subtitle">Select the options your looking for and fill out the form(s). We'll send you a ballpark figure and a follow-up email.</p>
        <div className="template-btn-container">
          {navButtons.map(nav => <button key={nav} className={`btn capitalize ${this.checkHighlight(nav) ? 'highlight' : ''}`} name={nav} onClick={addSteps}>{nav}</button>)}
        </div>
      </>
    );
  }
}

export default HomeTemplate;