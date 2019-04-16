import React, { Component } from 'react';
import '../../styles/Styles.css'
import { Input } from '@material-ui/core';
import io  from 'socket.io-client';
import API from '../Lists/api'
import Footer from '../Layout/Footer'
class ChatContent extends Component {
    constructor(props) {
      super(props)
      this.socket = io.connect('http://localhost:4000')
    }
    
    // Set the url in the state
    state = { 
        roomname:'',
        message:'',
        username:'',
        rooms: [],
    }

    //this.socket.on()
    
    // initialize = () => {
    //     let socket = io.connect(this.state.url)
    // } 
    // Invoked immediately once a component is mounted
    // Do not assign state here or callState
    componentDidMount(){
        // Connection to the socket
        //let socket = io.connect(this.state.url)
        // Check if the socket is not undefined
        if(this.socket !== undefined){
            console.log("Socket Connection")
        }

        this.socket.on('output',  function(data) {
            //  console.log(data)
        //     if(data.length){
        //     for( var x=0; x < data.length; x++){
        //         //Build out message div
        //         var message = document.createElement('div');
        //         message.setAttribute('class', 'chat-message');
        //         message.textContent = data[x].name +" "+ data[x].message;
        //         if(rooms.value === data[x].room ){
        //           messages.appendChild(message)
        //           messages.setAttribute("style","overflow:auto;");
        //           messages.insertBefore(message, messages.firstChild)
        //         }
        //       }
        //   }
        //console.log(data)
          });

          API.get(`/get/all/room`).then( res => {
            const room = res.data;
            //this.state.rooms.push(room)
            this.setState( { rooms:room })
          })

          

        }

    // Take the value of the room when select
    handleRoomInput = (e) => {
        this.setState({roomname: e.target.value})
        // console.log(this.state.room)
        // When new user join the room
        let username = this.state.username;
        var date = new Date().getTime()   
         // when new user joint the group
        var h_rooms = this.state.roomname;
        if (h_rooms !== "" && username !== ""){
            this.socket.emit('join', {
            name:username,
            message:`${username} is connected`,
            date: date,
            room: this.state.roomname,
        })
    }
}

    // Take the value of the room when select
    handleUsernameInput = (e) => {
        if(e.which === 13 || e.which === 9 ){
            //this.username.current.focus()
            this.setState({username: e.target.value})
        }
        
    }

    // Take the value of the room when select
    handleMessageInput = (e) => {
        if(e.which === 13 || e.which === 9 ){
        this.setState({message: e.target.value})
        }
    }

    componentDidUpdate(){
        console.log(this.state.room)
        //console.log(this.state.username)
        //console.log(this.state.message)
    }


    render() { 
       // const { classes } = this.props
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        <h5 className="text-left">
                            Chat Application
                        </h5>
                        <div id="status"></div>
                        <select id="roomname" className="form-control" required>
                            <option>Please Select</option>
                            {this.state.rooms.map(row => (
                                <option key={row._id} value={row.room}> { row.room } </option>
                            ))}
                        </select>
                        
                        <div id="chat">
                            <Input type="text" className="form-control" placeholder="Enter your name...." onKeyDown={ this.handleUsernameInput} />
                            <br/> <br/>        
                            <div className="card">
                                <div id="messages" className="card-block">
                            </div>
                        </div>
                        <br/>
                        <textarea id="textarea" className="form-control"  placeholder="Enter message" onKeyDown={this.handleMessageInput}></textarea>
                    </div>
                </div>
            </div>

            <div>
              <Footer/>
            </div>
        </div>
    );
    }
}
/*
FormContainer.propTypes = {
    classes: PropTypes.object.isRequired
}
*/
 
export default ChatContent;