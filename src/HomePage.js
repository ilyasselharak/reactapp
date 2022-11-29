import React, { Component } from 'react'
import Profile from './Profile';

export default class HomePage extends Component {
    constructor(){
        super();
        this.state={
            title:"Quotes",
            url_one:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            url_two:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            quote_one:"",
            quote_two:"",
        }
    }
    changetitle=()=>{
        this.setState({
            title:"My Quotes"}
        )
    }
    componentDidMount(){
        fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
        .then(res=>res.json())
        .then(response=>{
            console.log(response.data[0].quoteText)
            this.setState({quote_one:response.data[0].quoteText,quote_two:response.data[1].quoteText})
        })
        .catch(err=>console.log(err))
    }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Profile image={this.state.url_one} quote={this.state.quote_one} changetitle={this.changetitle} title={this.state.title}/>
        <Profile image={this.state.url_two} quote={this.state.quote_two} changetitle={this.changetitle} title={this.state.title}/>
      </div>
    )
  }
}
