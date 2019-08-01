import React, { Component, Fragment } from 'react'
import xiazai from './xiazai.png'
import Balboa from './Balboa.png'
export default class Home extends Component {
  constructor (props){
    super(props)
    this.state={
      count:0
    }
  }
  render () {
    const {count}=this.state
    return <Fragment>
      {count}
      <button onClick={()=>{
        this.setState({
          count:count+1
        })
      }}>button</button>
      <img src={xiazai} alt="" />
      <img src={Balboa} alt="" />
    </Fragment>
  }
}
