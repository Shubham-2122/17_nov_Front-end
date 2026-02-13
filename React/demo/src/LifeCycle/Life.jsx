// life cycle : class 
// Life Step by step

import React, { Component } from 'react'
import Header from '../Layout/Coman/Header'

class Life extends Component {
    constructor(){
        super();
        this.state = {
            name : "Shubham"
        }
    }

    //1) Mouting phase
    componentDidMount(){
        console.log("Hello Mouting phase")
    }

    // boolen true or fasle
    // shouldComponentUpdate(){
    //     console.log("Can we change data")
    //     return false
    // }

    // 2) update phase
    componentDidUpdate(){
        console.log("Update data ")
    }

    componentWillUnmount(){
        console.log("Unmouting data")
    }


  render() {
   
    return (
      <div>
        <Header />
        <h1>Hello this class react life cycle</h1>

        1) Mouting : initial phase : data enter 
        2) updated phase : data props or state 
        3) unmouting phase : Emty phase


        <h1>Name : {this.state.name}</h1>

        <button onClick={()=>this.setState({name : "karan patel"})}>Change name</button>

      </div>
    )
  }
}

export default Life
