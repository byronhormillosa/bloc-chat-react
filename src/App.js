import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


var config = {
    apiKey: "AIzaSyALUrSpYwl1mYccbd8ykIGAFcl1-pzOjNA",
    authDomain: "bloc-chat-06-29-2018.firebaseapp.com",
    databaseURL: "https://bloc-chat-06-29-2018.firebaseio.com",
    projectId: "bloc-chat-06-29-2018",
    storageBucket: "bloc-chat-06-29-2018.appspot.com",
    messagingSenderId: "322713602337"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
