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
import {ActionsType, StateType} from "./redux/store";
import {AppStateType} from "./redux/redux-store";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


type AppType = {
    state: AppStateType
    dispatch:(action: ActionsType) => void
}

function App() {

    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
