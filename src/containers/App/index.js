// App
import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

// Components
import Header from '../../components/Header/';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
            </div>
        );
    }
}