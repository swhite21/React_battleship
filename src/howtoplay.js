import React from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'

class HowtoPlay extends React.Component{
    constructor(props){
      super(props)
      this.state={

      }
    }
    onClickHandler = ()=>{
      let {startGame}=this.props
      startGame()
    }
  render(){
    return(
      <Jumbotron id="How-to-container" className="">
      <h1 className="titles">Welcome to BATTLESHIP!</h1>
       <p className="lead">Be the first to destroy your opponents fleet to win the battle! Players will place all of their ships at the start of each game while the other player looks away. When the battle begins players will take turns firing at eachothers ships untill only one player is left standing.</p>
       <Button className="btn btn-primary btn-lg" href="#" onClick={this.onClickHandler}>Start Game</Button>
      </Jumbotron>
    )
  }
}


export default HowtoPlay
