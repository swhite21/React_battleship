import React from 'react'
import {Button, Container, Jumbotron, ProgressBar} from 'react-bootstrap'

class BattleMenu extends React.Component{
    constructor(props){
      super(props)
      this.state={
        powerReady: false

      }
    }
  render(){
    let{powerReady}=this.state
    let{currentPlayer, player1, player2, powerUps}=this.props
    let player = ""
    if(currentPlayer == 1){
      player = true
    }else if(currentPlayer == 2){
      player  = false
    }
    return(
      <div id="battle-menu">

      <div id="player1-menu">
      <div className="col"id="p1-ingame-stats">
      <p className="titles">Player 1{player && <p>Your Turn</p>}</p>
        <span className="stats">
          <ul className="list-group list-group-flush">
          <li className="list-group-item">Score:</li>
          <li className="list-group-item">Boats Left {player1.boatsleft}</li>
          <li className="list-group-item">Hits: {player1.hitLogger.length}</li>
          <li className="list-group-item"><span className="powerup">Power-up meter</span>
            <ProgressBar animated variant="success" now={player1.powerUpMeter} />
          </li>
          <Button className="powerup-btn" disabled={player1.powerUpMeter}>Use Special</Button>
          </ul>
        </span>
      </div>
      </div>
      <div id="player2-menu">
      <div className="col" id="p2-ingame-stats">
      <p className="titles">Player 2{!player && <p>Your Turn</p>}</p>
        <span className="stats">
          <ul className="list-group list-group-flush">
          <li className="list-group-item">Score:</li>
          <li className="list-group-item">Boats Left {player2.boatsleft}</li>
          <li className="list-group-item">Hits:{player2.hitLogger.length}</li>
          <li className="list-group-item"><span className="powerup">Power-up meter</span>
            <ProgressBar animated variant="success" now={player2.powerUpMeter} />
          </li>
          <Button className="powerup-btn" disabled={player2.powerUpMeter}>Use Special</Button>
          </ul>
        </span>
      </div>
      </div>
    </div>
    )
  }
}


export default BattleMenu
