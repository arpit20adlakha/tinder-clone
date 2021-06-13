/** @jsx React.DOM */
import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path = "/chat/:person">
                    <Header backButton="/chats" />
                    <ChatScreen />
                </Route>
                <Route path = "/chats">
                    <Header backButton="/" />
                    <Chats />
                </Route>
                <Route path="/">
                    <Header/>
                    <TinderCards />
                    <SwipeButtons />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}


//
// {/* Tinder Cards */}
// {/* Buttons below tinder cards */}
// {/* Chat screen */}
// {/* Individual chat screen */}
export default App;
