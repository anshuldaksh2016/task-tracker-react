import React from 'react';
import PropTypes from 'prop-types'

function Button({ text, onClick }) {



    return (
        <div>
            <button className="btn"
                onClick={onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'blue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onCLick: PropTypes.func,
}
export default Button
