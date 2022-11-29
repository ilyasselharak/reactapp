import React, { Component } from 'react'

export default class Header extends Component {
constructor(){
    super();
    this.state={
        username:"ilyass",
        imgUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
}
changeUser=()=>{
 this.setState({
    username:"elharak",
    imgUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
 })
}
  render() {
    return (
      <div className='header-container'>
        <div className='header-profile'>
            <p>{this.state.username}</p>
            <img alt="profile image" src={this.state.imgUrl} className='profile-img'/>
        </div>
        <button onClick={this.changeUser}>change user</button>
      </div>
    )
  }
}
