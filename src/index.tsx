import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
    dialogsData: [
        { id:'1', name: 'Vitali'},
        { id:'2', name: 'Denis'},
        { id:'3', name: 'Viktor'},
        { id:'4', name: 'Valera'}
    ],
    messagesData: [
        {id:'1', message: 'Hi'},
        {id:'2', message: 'How are you'},
        {id:'3', message: 'Really'},
        {id:'4', message: 'Bye'},
    ],
    postsData: [
        {message:'Hi', likes: 6},
        {message:'Bye', likes: 7},
        {message:'How old are you?', likes: 10},
    ]
}

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={data.dialogsData} messagesData={data.messagesData} postsData={data.postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
