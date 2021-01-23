import React from 'react';

const Task = ({ text, day }) => {

    return (
        <div className="task">
            <h3>{text}</h3>
            <p>{day}</p>
        </div>
    )
}

export default Task;