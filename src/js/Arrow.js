import React from 'react';
import PropTypes from 'prop-types';
import arrowLeftImg from '../images/navigation-left-arrow.svg'
import arrowRightImg from '../images/navigation-right-arrow.svg'

const Arrow = ({direction, progress, allAnswers, goToPreviousQuestion, goToNextQuestion, showResults}) => {
    const image = direction === 'left' ? arrowLeftImg : arrowRightImg
    const isDisabled =
        (direction === 'left' && progress === 0) ||
        (direction === 'right' && !allAnswers[progress]) ||
        (direction === 'right' && showResults)
    return (
        <button
            disabled={isDisabled} className={`arrow ${isDisabled ? 'is-disabled' : ''}`}
            onClick={() => {
                direction === 'left' ? goToPreviousQuestion() : goToNextQuestion()
            }}
        >
            <img src={image}/>
        </button>
    );
};

Arrow.propTypes = {
    direction: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    allAnswers: PropTypes.array.isRequired,
    goToPreviousQuestion: PropTypes.func,
    goToNextQuestion: PropTypes.func,
    showResults: PropTypes.bool.isRequired,
};

export default Arrow;