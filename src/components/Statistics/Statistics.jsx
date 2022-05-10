import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return <div className={s.statistics}>
        <p className={s.statistics_item}>Good: {good}</p>
        <p className={s.statistics_item}>Neutral: {neutral}</p>
        <p className={s.statistics_item}>Bad: {bad}</p>
        <p className={s.statistics_item}>Total: {total}</p>
        <p className={s.statistics_item}>Positive feedback: {positivePercentage}</p>
    </div>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}

export default Statistics;