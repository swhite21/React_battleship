import React from 'react'
import {Container, Button, Jumbotron} from 'react-bootstrap'
import SingleSquare from './singleSquare'
import PlaceShipsPopUp from './placeShipsPopup'
import InGameMenu from './ingamemenu.js'
import BattleMenu from './battlemenu.js'
import WinPopUp from './winpopup.js'


class Board extends React.Component{
  constructor(props){
    super(props)
    this.state={
      boardSpaces:[ "1A","2A","3A","4A","5A","6A","7A","8A","9A","10A",
                    "1B","2B","3B","4B","5B","6B","7B","8B","9B","10B",
                    "1C","2C","3C","4C","5C","6C","7C","8C","9C","10C",
                    "1D","2D","3D","4D","5D","6D","7D","8D","9D","10D",
                    "1E","2E","3E","4E","5E","6E","7E","8E","9E","10E",
                    "1F","2F","3F","4F","5F","6F","7F","8F","9F","10F",
                    "1G","2G","3G","4G","5G","6G","7G","8G","9G","10G",
                    "1H","2H","3H","4H","5H","6H","7H","8H","9H","10H",
                    "1I","2I","3I","4I","5I","6I","7I","8I","9I","10I",
                    "1J","2J","3J","4J","5J","6J","7J","8J","9J","10J"
                  ],
      powerUps: ["Bomber", "Collision", "Radar"],
      populatedBoard: [<singleSquare />],
      player1: {  boatsleft: 3,
                  boatstoPlace: 3,
                  powerup: 0,
                  boatMap: [[],[],[]],
                  readyUp: false,
                  powerUpMeter: 1,
                  firedOn: [],
                  hitLogger: []
                },
      player2: {  boatsleft: 3,
                  boatstoPlace: 3,
                  powerup: 0,
                  boatMap: [[],[],[]],
                  readyUp: false,
                  powerUpMeter: 1,
                  firedOn: [],
                  hitLogger: []
                },
      boatSelector: 0,
      shipList: [["destroyer",["D","D","D","D","D"]], ["submarine",["S","S","S","S"]], ["smallBoat",["B","B"]]],
    //passed to each space to determine the squares state in color
    //TEMPORARILY PLACED ON FALSE
      placeShipsShow: true,
        //TEMPORARILY PLACED ON TRUE
      battleMode:false,
      placementMode: true,
      currentPlayer: 1,
      boatOut: false,
      battleWon: false
    }
  }
  playerReady = ()=>{
    let{player1, player2, currentPlayer}=this.state
    let{startBattleCheck}=this
    let player = ''
    if (currentPlayer == 1){
      player = player1
    }else if(currentPlayer == 2){
      player = player2
    }
    player.readyUp = true
    this.setState({player})
    console.log(`${currentPlayer} ready up status is ${player.readyUp}`);
    startBattleCheck()

  }
  startBattleCheck = ()=>{
    let{player1, player2, placementMode, battleMode}=this.state
    if(player1.readyUp == true && player2.readyUp == true){
      this.setState({placementMode: false})
      this.setState({battleMode: true})
      console.log(`Battelmode is ${battleMode}`);
    }else{
      console.log("players not readied");
    }
  }
  onHoverHighlight = (index, boat)=>{
    let{boardSpaces, destroyer, submarine, smallBoat, boatSelector, shipList, boatOut}=this.state
    let{outofBounds, outofBoundsReset}=this
    let boatLng = shipList[boatSelector][1].length
    console.log(shipList[boatSelector][1]);
    let adjacentIndexes = []

      for(let i = 0; i < boatLng; i++){
        var num = i*10
        adjacentIndexes.push(index-num)
      }

      adjacentIndexes.map((value)=>{
        //prevents player for placing ships out of bounds
          if(value >= 0 && value <= 99){
        document.getElementById(value).style.color = "green"
        function returnColor(){
          document.getElementById(value).style.color = ""
        }
        setTimeout(returnColor, 700)
        outofBoundsReset()
      }else{
      outofBounds()
        adjacentIndexes.map((value)=>{
          if(value >= 0 && value <= 99){
          document.getElementById(value).style.color = "red"
          function returnColor(){
            document.getElementById(value).style.color = ""
          }}
        })

      }
      })
  }
  powerUpChanger = (currentPlayer) =>{
    let{player1, player2, powerUps}= this.state

      if(currentPlayer == 1){
        if(player1.powerup == powerUps.length-1){
          player1.powerup = 0
          this.setState({player1})
        }else{
        player1.powerup = player1.powerup +1
        this.setState({player1})
        }
      }else if (currentPlayer == 2){
        if(player2.powerup == powerUps.length-1){
          player2.powerup = 0
          this.setState({player2})
        }else{
        player2.powerup = player2.powerup +1
        this.setState({player2})
        }
      }
  }
  boatPlaced=()=>{
    let{player1, player2, currentPlayer}=this.state
    let player = ''
    if (currentPlayer == 1){
      player = player1
    }else if(currentPlayer == 2){
      player = player2
    }

    let newNum = player.boatMap.map((value)=>{
        if(value != ""){
          return 1
        }
      })
    newNum = newNum.filter((value)=>{
      return value >= 0
    })
    let sum = newNum.reduce(add, 0)
    function add(accumulator, a) {
    return accumulator + a;
    }
    player.boatstoPlace = 3 -sum
    this.setState({player})
    //color the boats by index
    var x = document.getElementById("board");
    var y = x.getElementsByClassName("single-square");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.backgroundColor = "#94aace";
    }
    player.boatMap.map((value)=>{
      value.map((value)=>{
        document.getElementById(value).style.backgroundColor= "green"
      })
    })
  }

  placeBoat =(clickedIndex)=>{
  let{player1, player2, boatSelector, currentPlayer, shipList}=this.state
  let{boatPlaced}=this

  let player = ''
  if (currentPlayer == 1){
    player = player1
  }else if(currentPlayer == 2){
    player = player2
  }

  let boatLng = shipList[boatSelector][1].length
  let adjacentIndexes = []

    for(let i = 0; i < boatLng; i++){
      var num = i*10
      if(clickedIndex-num >= 0){
      adjacentIndexes.push(clickedIndex-num)
    }else{
      adjacentIndexes = []
    }
  }
  player.boatMap[boatSelector] = adjacentIndexes
  this.setState({player})
  boatPlaced()

  }
  checkBattleMode = ()=>{
  let{battleMode}=this.state
  return battleMode
  }
  checkPlacementMode = ()=>{
  let{placementMode}=this.state
  return placementMode
  }


  boatSelectorChange = ()=>{
    let{boatSelector, shipList}=this.state
      if (boatSelector < shipList.length - 1){
      this.setState({boatSelector: boatSelector+1})
    }else{
      this.setState({boatSelector: 0})
    }
  }
  fire = (index)=>{
    let{currentPlayer, player1, player2}=this.state
    let player = ''
    let opponent = ''
    if (currentPlayer == 1){
      player = player1
      opponent = player2
    }else if(currentPlayer == 2){
      player = player2
      opponent = player1
    }

    console.log(`fired on index ${index}`);

    //pulls all of the opponents boat indexes into currentplayerboats array
    let currentPlayerBoats = []
    opponent.boatMap.map((value)=>{
      value.map((value)=>{
        currentPlayerBoats.push(value)
      })
    })
    //if player gets a hit
    if(currentPlayerBoats.includes(index)){
      player.hitLogger.push(index)
      console.log("player hit!");
      document.getElementById(index).style.backgroundColor = "red"
      player.powerUpMeter = player.powerUpMeter + 5
      this.setState({player})
    }else{
      //logs the index that was fired on
      player.firedOn.push(index)
      this.setState({player})
      document.getElementById(index).style.backgroundColor = "grey"
    }
    console.log(`${player.firedOn} hit logger is ${player.hitLogger}`);
    this.winCheck()
    //raises powerup level a random amount between 1-10 every fire
    this.powerUpLevel()
  }
  winCheck = ()=>{
  let{player1, player2, currentPlayer}=this.state
  let player = ''
  let opponent = ''
    if (currentPlayer == 1){
      player = player1
      opponent = player2
    }else if(currentPlayer == 2){
      player = player2
      opponent = player1
    }
  let boatArr = []
  opponent.boatMap.map((value)=>{
    value.map((value)=>{boatArr.push(value)})
  })
  console.log(boatArr.length);
  console.log(player.hitLogger.length);
    if(player.hitLogger.length == boatArr.length){
      this.battleWinner()
    }else{
      //clears board
      //populates with player specific viewBox
      setTimeout(this.viewChanger, 1200)
      //Changes players turn
      setTimeout(this.battlePlayerSwitch, 1200)
    }
  }
  battlePlayerSwitch = ()=>{
    let{currentPlayer}=this.state
    if (currentPlayer == 1) {
      this.setState({currentPlayer: 2})

    }else if(currentPlayer ==2){
      this.setState({currentPlayer: 1})
    }
  }
  hitMarker =()=>{}
  viewChanger = ()=>{
    let{currentPlayer, player1, player2}=this.state
    let player = ''
    let opponent = ''
    if (currentPlayer == 1){
      player = player1
      opponent = player2
    }else if(currentPlayer == 2){
      player = player2
      opponent = player1
    }
    var x = document.getElementById("board");
    var y = x.getElementsByClassName("single-square");
    var i;
    for (i = 0; i < y.length; i++) {
      if(opponent.hitLogger.includes(i)){
          y[i].style.backgroundColor = "red";
      }else if(opponent.firedOn.includes(i)){
        y[i].style.backgroundColor = "grey";
      }else{
      y[i].style.backgroundColor = "#94aace";
      }
    }
  }
  powerUpLevel = ()=>{
    let{player1, player2, currentPlayer}=this.state
    let player = ''
    if (currentPlayer == 1){
      player = player1
    }else if(currentPlayer == 2){
      player = player2
    }
    //FOR TESTING POWERUP METER
  if(player.powerUpMeter < 99 && player.powerUpMeter != 0){
    player.powerUpMeter = player.powerUpMeter + Math.random()*10
  }else{
    player.powerUpMeter = 0
  }

    this.setState({player1})
  }
  startGame =()=>{
    let{boardSpaces, populatedBoard, squareStateColor, boatOut}=this.state
    let{onHoverHighlight, placeBoat, checkBattleMode, checkPlacementMode, fire}=this
    let boardpop = boardSpaces.map(maphandler)
    this.setState({placementMode:true})
    function maphandler(value, index){
      return <SingleSquare value={value}
              squareStateColor={squareStateColor}
              onHoverHighlight={onHoverHighlight}
              placeBoat={placeBoat}
              boatOut={boatOut}
              index={index}
              checkPlacementMode={checkPlacementMode}
              checkBattleMode={checkBattleMode}
              fire={fire}

      />
    }
    this.setState({populatedBoard: boardpop})
  }
  placmentPopUpHandler =()=>{
    let{placeShipsShow}=this.state
    this.setState({placeShipsShow: false})
  }
  outofBounds =()=>{
    let{boatOut}=this.state
    this.setState({boatOut:true})
  }
  outofBoundsReset =()=>{
    let{boatOut}=this.state
    this.setState({boatOut:false})
  }
  switchPlayer = ()=>{
    let{currentPlayer}=this.state
    let{playerReady}=this
    if (currentPlayer == 1) {
      document.getElementById('in-game-menu').style.cssFloat = "right"
      this.setState({currentPlayer: 2})
    }else if(currentPlayer ==2){
      document.getElementById('in-game-menu').style.cssFloat = "left"
      this.setState({currentPlayer: 1})
    }
    var x = document.getElementById("board");
    var y = x.getElementsByClassName("single-square");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.backgroundColor = "#94aace";
    }
    playerReady()
  }
  battleWinner=()=>{
    let{battleWon}=this.state
    this.setState({battleWon:true})
  }

  render(){
    let{powerUps, player1, player2, boatOut, placementMode, populatedBoard, placeShipsShow, currentPlayer, shipList, boatSelector,battleWon}=this.state
    let{placmentPopUpHandler, startGame, boatSelectorChange, onHoverHighlight, powerUpChanger, switchPlayer}=this
    return(
    <div className="board-bg">
    You Win!
    <button onClick={this.startBattleCheck}> test</button>
      { placementMode &&<InGameMenu shipList={shipList}
                powerUpChanger={powerUpChanger}
                onHoverHighlight={onHoverHighlight}
                currentPlayer={currentPlayer}
                boatSelectorChange={boatSelectorChange}
                boatSelector={boatSelector}
                player1={player1}
                player2={player2}
                powerUps={powerUps}
                switchPlayer={switchPlayer}
      />}
        {placeShipsShow && <PlaceShipsPopUp
          placmentPopUpHandler={placmentPopUpHandler}
          currentPlayer={currentPlayer}
          startGame={startGame}
          />
        }
        {boatOut && <div className="alert alert-danger" id="out-of-bounds" role="alert">Out of bounds</div>}
      <div id="board">
      {battleWon && <WinPopUp currentPlayer={currentPlayer}/>}
      {populatedBoard}

      {!placementMode && <BattleMenu
          currentPlayer={currentPlayer}
          player1={player1}
          player2={player2}
          powerUps={powerUps}
        />}
        </div>
    </div>
  );
  }

}
export default Board
