import React from 'react';
import useClock from '../../hooks/useClock/useClock';
import './styles.scss';
// import PropTypes from 'prop-types';

function BetterClock() {
    const { timeClock } = useClock()

    return (
        <div className="better-clock" >
            <p className="better-clock_time">{timeClock}</p>
        </div>
    );
}

export default BetterClock;