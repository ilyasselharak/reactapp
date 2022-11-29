import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      mytitle:this.props.title
    }
  }
  changetitle=()=>{
    this.setState({
      mytitle:'my Quote'
    })
  }
  render() {
    return (
      <div className='profile-container '>{this.state.mytitle} <br/>
      <img src={this.props.image}/>
      <p>{this.props.quote}</p>
      <button onClick={this.props.changetitle}>change parents title</button><br/>
      <button onClick={this.changetitle}>change my title</button></div>
    )
  }
}

