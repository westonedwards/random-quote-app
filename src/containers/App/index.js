// App
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'normalize.css'; // CSS normalizer
import './App.scss';

// Components
import Quote from '../../components/Quote/';

// Variables
const URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1';
const headers = {
    headers : {
        'X-Mashape-Key': 'XXXXXXXXXXXXXX', // Key removed
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

// Main App Class
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomQuote: {},
        };
        this.handleGenerateRandomQuote = this.handleGenerateRandomQuote.bind(this);
    }
    componentDidMount() {
        this.handleGenerateRandomQuote();
    }
    handleGenerateRandomQuote() {
        fetch(URL, headers)
        .then(res => res.json())
        .then(data => this.setState({ randomQuote: data }));
    }
    render() {
        return (
            <div className="container">
                <Quote randomQuote={this.state.randomQuote} handleGenerateRandomQuote={this.handleGenerateRandomQuote} />
            </div>
        );
    }
}
