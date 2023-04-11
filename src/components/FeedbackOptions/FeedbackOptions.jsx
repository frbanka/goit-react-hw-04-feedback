import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feed}>
      {options.map(option => (
        <div>
          <button
            className={css.feed__button}
            key={option}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
