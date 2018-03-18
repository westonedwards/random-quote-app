// Header
import React from 'react';
import ReactDOM from 'react-dom';

import './Quote.scss';
import reactLogo from './react-logo.png';

const Quote = (props) => {
    return (
        <div className="header-container">
            <h1>{props.randomQuote.quote}</h1>
            <h3>By {props.randomQuote.author}</h3>
            <button onClick={props.handleGenerateRandomQuote}>NEW QUOTE</button>
            <p>Site built with</p>
            <img src={reactLogo} alt="React Logo"/>
        </div>
    );
};

export default Quote;