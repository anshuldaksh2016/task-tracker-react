import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Task = ({ text, day, onDelete, id }) => {

    return (
        <div className="task">
            <h3>{text} <FaTimes
                onClick={() => onDelete(id)}
                style={{ color: 'red', cursor: 'pointer' }} /></h3>
            <p>{day}</p>
        </div>
    )
}

export default Task;