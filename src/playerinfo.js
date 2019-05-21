import React from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap'

class PlayerInfo extends React.Component{
    constructor(props){
      super(props)
      this.state={

      }
    }
    clickHandler = ()=>{
    let {player1, player2, powerUpChanger, currentPlayer} =this.props
    powerUpChanger(currentPlayer)
    }
  render(){
    let{powerUps, player1, player2, currentPlayer}=this.props
    let{clickHandler}=this
    return(
      <div className="player-stats">
      <p className="player-title">Player {currentPlayer}</p>
      <ul className="list-group">
        <li className="list-group-item">Boats left to Deploy {player1.boatstoPlace}</li>
        <li className="list-group-item">Special Unit: {powerUps[player1.powerup]}<Button onClick={clickHandler}id="sub-btn" >Change</Button></li>
        <li className="list-group-item">Submarine@ {currentPlayer == 1 && player1.boatMap[1]}{currentPlayer == 2 && player2.boatMap[1]}</li>
        <li className="list-group-item">Destroyer@ {currentPlayer == 1 && player1.boatMap[0]}{currentPlayer == 2 && player2.boatMap[0]}</li>
        <li className="list-group-item">Small Boat@ {currentPlayer == 1 &&player1.boatMap[2]}{currentPlayer == 2 &&player2.boatMap[2]}</li>
      </ul>
      </div>
    )
  }
}


export default PlayerInfo
