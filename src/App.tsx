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

type DataTypes = {
    postsData: PostTypes[]
    messagesData: MessageTypes[]
    dialogsData: DialogTypes[]
}

export type PostsDataTypes = {
    postsData: PostTypes[]
}

export type DialogsDataTypes = {
    messagesData: MessageTypes[]
    dialogsData: DialogTypes[]
}
// type DialogDataTypes = {
//     dialogData: DialogTypes[]
// }

type PostTypes = {
    message: string,
    likes: number
}
type MessageTypes = {
    id: string,
    message: string
}
type DialogTypes = {
    id: string,
    name: string
}

function App(props: DataTypes) {

    return (
        <BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile postsData = {props.postsData}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
