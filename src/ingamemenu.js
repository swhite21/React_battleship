import React from 'react'
import {Button, Container, Jumbotron, Card} from 'react-bootstrap'
import ShipsInfo from './shipsinfo'
import PlayerInfo from './playerinfo'

class InGameMenu extends React.Component{
    constructor(props){
      super(props)
      this.state={
        patrolBoat: false,
        destroyer: false,
        submarine: false

      }
    }
    onClickHandler = ()=>{
      let {placmentPopUpHandler}=this.props
      placmentPopUpHandler()
    }
  render(){
    let{powerUpChanger, powerUps, currentPlayer, shipList, boatSelector, boatSelectorChange, player1, player2, switchPlayer}=this.props
    let{patrolBoat, Destroyer, submarine}=this.state
    return(

      <div id="in-game-menu" className="">
      <div className="card">
      <div className="card-body">
      <h3 className="card-text"> Placement Mode</h3>
      </div>
      </div>
          <PlayerInfo currentPlayer={currentPlayer}
                      powerUpChanger={powerUpChanger}
                      powerUps={powerUps}
                      player1={player1}
                      player2={player2}
          />
        <ShipsInfo shipList={shipList}
            boatSelector={boatSelector}
            boatSelectorChange={boatSelectorChange}
        />
        <Button type="button" onClick={boatSelectorChange} className="btn btn-warning boat-btn">Change Boat</Button>
        <div id="proceed-div">
        <Button type="button" id="proceed-to-battle"className="btn btn-success" onClick={switchPlayer} disabled={player1.boatstoPlace != 0}>Proceed to Battle</Button>
        </div>

      </div>
    )
  }
}


export default InGameMenu
