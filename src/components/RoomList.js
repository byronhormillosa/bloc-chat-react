import React, { Component } from 'react';
class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        rooms: [], newRoomName: '',
  };
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
      });
   }
    
    handleChange(e) {
    this.setState({ newRoomName: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newRoomName) return
    this.roomsRef.push({ name: this.state.newRoomName })
    this.setState({ newRoomName: ''})
  }

    
    render() {
        return (
          <div className="roomlist">
            <h1>Bloc Chat App</h1>
            <form onSubmit={ (e) => this.handleSubmit(e) }>
              <p>Create New Chat Room</p>
              <label>
                Name A New Chat Room:
                <input
                  type="text"
                  placeholder="enter room name"
                  value={this.state.newRoomName}
                  onChange={ (e) => this.handleChange(e) }/>
              </label>
              <input type="submit" value="submit" />
            </form>
            <ul>
              {this.state.rooms.map( (room, index) => (
                <li key={index} onClick={() => this.props.changeActiveRoom(room)}> {room.name} </li>
                ) )}
           </ul>
             
          </div>
        );
    }
}
export default RoomList;