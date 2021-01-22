import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'
//const headingStyles = {
//    color: 'red', backgroundColor: 'skyblue'
//
//}

export const Header = ({ title }) => {
    return (
        <header>
            <h1>Task Tracker</h1>
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
