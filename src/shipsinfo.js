import React from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'

class ShipsInfo extends React.Component{
    constructor(props){
      super(props)
      this.state={

      }
    }
  render(){
    let{shipList, boatSelector, boatSelectorChange}=this.props
    return(
      <div>
      <p className="titles">{shipList[boatSelector][0]} Currently selected</p>
      </div>
    )
  }
}


export default ShipsInfo
