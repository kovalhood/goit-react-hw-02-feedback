import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onGoodButton, onNeutralButton, onBadButton}) => {
    return <div className={s.options}>
        <button className={s.options_button} type="button" onClick={onGoodButton}>Good</button>
        <button className={s.options_button} type="button" onClick={onNeutralButton}>Neutral</button>
        <button className={s.options_button} type="button" onClick={onBadButton}>Bad</button>
    </div>
}

export default FeedbackOptions;