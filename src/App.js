import React, {Component} from 'react';
import Wrapper from "components/Wrapper";
import Section from "components/Section";
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    goodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    neutralFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    badFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const { countTotalFeedback } = this;
        return Math.round(good / countTotalFeedback() * 100) + '%';
    }
    

    render() {
        const { good, neutral, bad } = this.state;
        const { goodFeedback, neutralFeedback, badFeedback, countTotalFeedback,countPositiveFeedbackPercentage } = this;

        return (
            <Wrapper>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        onGoodButton={goodFeedback}
                        onNeutralButton={neutralFeedback}
                        onBadButton={badFeedback}
                    />
                </Section>

                <Section title={'Statistics'}>
                    {countTotalFeedback() ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </Wrapper>
        )
    }
}

export default App;