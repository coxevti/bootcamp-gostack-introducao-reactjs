import React from 'react';

function TechItem({tech, onDestroy}) {
    return (
        <li>
            {tech}&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={onDestroy} type="button">X</button>
        </li>
    );
};

export default TechItem;