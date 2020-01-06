import React from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, onDestroy}) {
    return (
        <li>
            {tech}&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={onDestroy} type="button">X</button>
        </li>
    );
};

TechItem.defaultProps = {
    tech: 'defaul'
};

TechItem.propTypes = {
    tech: PropTypes.string,
    onDestroy: PropTypes.func.isRequired
};

export default TechItem;