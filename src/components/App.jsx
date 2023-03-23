import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countTotalPercentage = () => {
    return Math.round((this.state.good / this.countTotal()) * 100);
  };
  whenClick = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
    this.countTotal();
    this.countTotalPercentage();
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const goodFeebackPercentage = this.countTotalPercentage();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.whenClick}
        />
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={goodFeebackPercentage}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    );
  }
}
