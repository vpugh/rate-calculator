import React, { Component } from 'react';
import './templates.scss';
import GeneralTemplate from './general';
import { BrowserRouter, Route, Link } from "react-router-dom";

class HomeTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: '',
      nextSteps: ["","general"],
      navButtons: ["design", "development", "strategy", "email"],
    }
  }

  addSteps = ev => {
    const { name } = ev.target;
    const { nextSteps } = this.state;
    if (nextSteps.includes(name)) {
      const filtered = nextSteps.filter(steps => steps !== name);
      this.setState({ nextSteps: filtered });
    } else {
      this.setState({ nextSteps: [...nextSteps, name] }, null);
    }
  }

  checkHighlight = name => {
    const { nextSteps } = this.state;
    if (nextSteps.includes(name)) {
      return true;
    } else {
      return false;
    }
  }

  findNextStep = () => {
    const { nextSteps, activeStep } = this.state;
    const steps = nextSteps.length;
    const currentIndex = nextSteps.findIndex(step => step === activeStep);
    const stepped = +currentIndex + 1;
    console.log(steps, currentIndex)
    return nextSteps[stepped];
  }
  
  render() {
    const {
      navButtons,
    } = this.state;

    return (
      <div className="flex">
        <div className="container">
          <h2 className="wordmark">Quote Calculator</h2>
          <h3 className="template-title">What can we help you with today?</h3>
          <p className="template-subtitle">Select the options your looking for and fill out the form(s). We'll send you a ballpark figure and a follow-up email.</p>
          <div className="template-btn-container">
            {navButtons.map(nav => <button key={nav} className={`btn ${this.checkHighlight(nav) ? 'highlight' : ''}`} style={{ textTransform: 'capitalize'}} name={nav} onClick={this.addSteps}>{nav}</button>)}
          </div>
          <div className="template-navigation-container">
          <button type="button" className="btn navigation-btn">Start Form</button>
          <BrowserRouter>
            <>
              <Link to={`/${this.findNextStep()}`}>Next Step</Link>
            </>
            <Route path="/general" exact render={() => {
              return (
                <GeneralTemplate />
              );
            }}
            />
          </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTemplate;