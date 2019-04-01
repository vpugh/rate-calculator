import React, { Component } from 'react';
import './templates.scss';
import GeneralTemplate from './general';
import DesignTemplate from './design';
import DevelopmentTemplate from './development';
import EmailTemplate from './email';
import HomeTemplate from './main';
import StrategyTemplate from './strategy';
import SummaryTemplate from './summary';

class TemplateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: "",
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

  findCurrentIndex = () => {
    const { nextSteps, activeStep } = this.state;
    const currentIndex = nextSteps.findIndex(step => step === activeStep);
     return currentIndex;
  }

  findNextStep = () => {
    const { nextSteps } = this.state;
    const stepUp = +this.findCurrentIndex() + 1;
    return nextSteps[stepUp];
  }

  findPrevStep = () => {
    const { nextSteps } = this.state;
    const stepDown = +this.findCurrentIndex() - 1;
    return nextSteps[stepDown];
  }

  advanceCurrentStep = type => {
    const nextStep = this.findNextStep();
    const prevStep = this.findPrevStep();
    if (type === 'next') {
      this.setState({ activeStep: nextStep })
    }
    if (type === 'prev') {
      this.setState({ activeStep: prevStep })
    }
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
        return <SummaryTemplate />;
    }
  }

  renderButton = step => {
    switch(step) {
      case '':
        return 'Start Form';
      case 'general':
        return 'Continue';
      case 'design':
        return 'Continue';
      case 'development':
        return 'Continue';
      case 'strategy':
        return 'Continue';
      case 'email':
        return 'Continue';
      default:
        return 'Send Estimated Rate & Info';
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
            {activeStep !== '' && <button className="btn" onClick={() => this.advanceCurrentStep('prev')}>Previous</button>}
            <button type="button" className="btn navigation-btn" onClick={() => this.advanceCurrentStep('next')}>{this.renderButton(activeStep)}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateContainer;