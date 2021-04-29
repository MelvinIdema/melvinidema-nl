import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./button.css";

export default function Button({type, label, size, onButtonClick, className}) {

    const classes = clsx(
        'btn',
        !!type && type,
        !!size && `size-${size}`,
        className
    );

    return (
        <button onClick={onButtonClick} className={classes}>
            <span>{label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.807 16.104"><g data-name="Group 99" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path data-name="Line 14" d="M.75 7.808h41"/><path data-name="Path 4" d="M32.775 1.048l9.282 6.727-9.282 7.277" stroke-linejoin="round"/></g></svg>
        </button>
    );
}

Button.propTypes = {
    /** The label of the Button */
    label: PropTypes.string.isRequired,
    /** The type of the Button */
    type: PropTypes.oneOf(['default','secondary']),
    /** The size of the Button */
    size: PropTypes.oneOf(['default', 'large']),
    /** The function called when button is clicked */
    onButtonClick: PropTypes.func.isRequired,
}
