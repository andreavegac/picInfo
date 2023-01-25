import React from "react";
import './Title.css';

const Title = ({text}) => {
    return (
        <h1 className="title-label"> {text} </h1>
    )
};

export default Title;