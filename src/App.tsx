import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

function Header() {
    return (
        <div>
            <ul>
                <a href={'#'}>Home </a>
                <a href={'#'}>News Feed </a>
                <a href={'#'}>Messages </a>
            </ul>
        </div>
    );
}

function Technologies() {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
}

export default App;
