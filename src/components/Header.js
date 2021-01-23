import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


//const headingStyles = {
//    color: 'red', backgroundColor: 'skyblue'
//
//}

export const Header = ({ title }) => {

    const onClick = () => {
        console.log('click');
    }

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button text="Add" onClick={onClick} />


        </header>
    )
}



Header.defaultProps = {
    title: "Default Props"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
