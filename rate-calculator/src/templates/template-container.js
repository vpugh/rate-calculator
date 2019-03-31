import React, { Component } from 'react';
import './templates.scss';
import GeneralTemplate from './general';
import DesignTemplate from './design';
import DevelopmentTemplate from './development';
import EmailTemplate from './email';
import HomeTemplate from './main';
import StrategyTemplate from './strategy';

class TemplateContainer extends Component {
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
    const currentIndex = nextSteps.findIndex(step => step === activeStep);
    const stepped = +currentIndex + 1;
    return nextSteps[stepped];
  }

  advanceCurrentStep = () => {
    const nextStep = this.findNextStep();
    this.setState({ activeStep: nextStep })
  }

  renderSwitch = step => {
    switch(step) {
      case '':
        return <HomeTemplate navButtons={this.state.navButtons} checkHighlight={this.checkHighlight} nextSteps={this.state.nextSteps} addSteps={this.addSteps} />;
      case 'general':
        return <GeneralTemplate />;
      case 'design':
        return <DesignTemplate />;
      case 'development':
        return <DevelopmentTemplate />;
      case 'strategy':
        return <StrategyTemplate />;
      case 'email':
        return <EmailTemplate />;
      default:
        return 'nothing';
    }
  }
  
  render() {
    const {
      activeStep,
    } = this.state;

    return (
      <div className="flex">
        <div className="container">
          <h2 className="wordmark">Quote Calculator</h2>
          {this.renderSwitch(activeStep)}
          <div className="template-navigation-container">
          <button type="button" className="btn navigation-btn" onClick={this.advanceCurrentStep}>Start Form</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateContainer;