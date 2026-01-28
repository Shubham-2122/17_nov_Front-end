// state : it's simple varibale 
// we can change data
// State same file use 
// class :  this.state : defined
// class : change this.setstate()

import React, { Component } from 'react'
import Images from './Images';

class ClassState extends Component {

    constructor(){
        super();
        this.state = {
            name : "shubham",
            count : 0,
            isImage : true
        }
    }

  render() {
        console.log(this.state)
    return (
      <div>
        <h1>name : {this.state.name}</h1>

        <button onClick={()=>this.setState({name : "karan"})}>Change name</button>
        <button onClick={()=>this.setState({name:"hitesh"})}>Chnage name2</button>

        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
        <button onClick={()=>this.setState({count : this.state.count - 1})}>Decrement</button>
        <button onClick={()=>this.setState({count : 0 })}>Zero</button>
        <hr /> <hr />

        <button onClick={()=>this.setState({isImage : false})}>Hide</button>
        <button onClick={()=>this.setState({isImage : true})}>Show</button>
        <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>

        {
            (this.state.isImage) ? <Images /> : false
        }
        

      </div>
    )
  }
}

export default ClassState
