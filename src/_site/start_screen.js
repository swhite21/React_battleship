import React from 'react'
import {Button, Container} from 'react-bootstrap'

class StartScreen extends React.Component{
  clickHandler=()=>{
    let{enterMainMenu}=this.props
    enterMainMenu()
  }
  render(){
    return(
      <Container id="start-screen" className="start-screen-bg">
      <div id="title-and-btn">
        <h1 id="hero-title" className="w3-animate-opacity">BATTLESHIP</h1>
          <Button id="start-game-btn" type="button" className="btn btn-danger w3-animate-zoom" onClick={this.clickHandler}>
          Enter the BattleField
          </Button>
      </div>
      </Container>
    )
  }
}


export default StartScreen
