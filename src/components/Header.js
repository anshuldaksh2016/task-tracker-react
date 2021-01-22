import React from 'react'
import PropTypes from 'prop-types'

const headingStyles = {
    color: 'red', backgroundColor: 'skyblue'

}

export const Header = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyles}>Task Tracker</h1>
            <p> {title}</p>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Props"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
