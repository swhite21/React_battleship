import React from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'

class ShipsInfo extends React.Component{
    constructor(props){
      super(props)
      this.state={

      }
    }
    onClickHandler = ()=>{
      let {placmentPopUpHandler, startGame}=this.props
      placmentPopUpHandler()
      startGame()
    }
  render(){
    let{currentPlayer}=this.props
    return(
      <Jumbotron id="place-ships-popup" className="">
      <h1 className="titles">Player {currentPlayer} place your ships</h1>
       <p className="lead">Make sure player {currentPlayer == 1 && 2} is not looking!</p>
       <Button className="btn btn-primary btn-lg" href="#" onClick={this.onClickHandler}>Place Ships</Button>
      </Jumbotron>
    )
  }
}


export default ShipsInfo
