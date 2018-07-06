import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
    constructor(props) {
    super(props);
        
        this.state={activeRoom: '', activeUser: ''}
        this.changeActiveRoom = this.changeActiveRoom.bind(this);
        this.setUser = this.setUser.bind(this);
    }
    
     setUser(user) {
         this.setState({ activeUser: user })
     }
    
    changeActiveRoom(room) {
        this.setState({activeRoom:room})
        console.log(this.state.activeRoom)
    }
    
  render() {
    return (
      <div className="App">
            
        <aside className='sideList'>
        <RoomList 
        firebase={firebase} 
        activeRoom={this.state.activeRoom}
        changeActiveRoom={this.changeActiveRoom} />
        </aside>
        
        <User 
          id='Userid'
          firebase={firebase}
          setUser={this.setUser}
          user={this.state.activeUser} />
        
        <MessageList id='MessageList'  
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          user={this.state.activeUser}
          setUser={this.setUser} />
        
      </div>
    );
  }
}
export default App;
