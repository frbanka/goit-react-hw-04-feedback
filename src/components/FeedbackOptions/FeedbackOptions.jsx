import { PropTypes } from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const opsArray = Object.keys(options);
  return (
    <div className={css.feed}>
      {opsArray.map(a => {
        return (
          <button
            className={css.feed__button}
            key={a}
            type="button"
            name={a}
            onClick={onLeaveFeedback}
          >
            {a === 'good' ? 'good' : a === 'neutral' ? 'neutral' : 'bad'}
          </button>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
