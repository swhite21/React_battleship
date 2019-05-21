import React from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'

class WinPopUp extends React.Component{
    constructor(props){
      super(props)
      this.state={

      }
    }
  render(){
    let{currentPlayer}=this.props
    return(
      <Jumbotron id="winner-box">
      <div>Player{currentPlayer} Wins!</div>
      <Button className="prominent-btn">Play Again?</Button>
      <Button className="prominent-btn">Back to main menu</Button>
      </Jumbotron>
    )
  }
}


export default WinPopUp
