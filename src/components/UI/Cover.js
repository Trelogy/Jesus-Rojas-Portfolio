import React from "react";

import classes from './Cover.module.css';

const Cover = (props) => {
    return (
        <div className={`${classes['cover-container']} ${props.className}`}>{props.children}</div>
    );
};

export default Cover;