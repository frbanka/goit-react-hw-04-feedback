import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + neutral + bad;
  };
  const countTotalPercentage = () => {
    return Math.round((good / countTotal()) * 100);
  };
  const whenClick = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={whenClick}
      />
      {countTotal() !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotal()}
          positivePercentage={countTotalPercentage()}
        />
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </Section>
  );
}
export default App;
