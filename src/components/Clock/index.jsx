import React from 'react';
import useClock from '../../hooks/useClock/useClock';
// import PropTypes from 'prop-types';

function Clock() {
    const { timeClock } = useClock()

    return (
        <div style={{ fontSize: '42px' }}>
            {timeClock}
        </div>
    );
}

export default Clock;