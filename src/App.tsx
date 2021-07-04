import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import { Settings } from './components/Settings/Settings';
import {ActionsType, StateType} from "./redux/state";


type AppType = {
    state: StateType
    dispatch:(action: ActionsType) => void
}

function App(props: AppType) {

    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile
                    profilePage = {props.state.profilePage}
                    dispatch={props.dispatch} />}
                />
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogs={props.state.messagesPage.dialogs}
                    messages={props.state.messagesPage.messages}
                    newMessageText={props.state.messagesPage.newMessageText}
                    dispatch={props.dispatch}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
