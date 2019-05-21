import React from 'react';
import{Button, Jumbotron}from 'react-bootstrap'
import './App.css';
import Board from './board.js'
import HowtoPlay from './howtoplay.js'
import StartScreen from './start_screen.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      startScreen: true,
      mainMenu: false,
      gameStart: false,
    }
  }
  enterMainMenu=()=>{
    let {mainMenu, startScreen}=this.state
    this.setState({mainMenu: true})
    this.setState({startScreen: false})
  }
  startGame=()=>{
    let {gameStart, mainMenu}=this.state
    this.setState({gameStart: true})
    this.setState({mainMenu: false})
  }
  render(){
    let {gameStart, mainMenu, startScreen}=this.state
    let{startGame, enterMainMenu}=this
    return (
      <div className="App">
        {startScreen && <StartScreen enterMainMenu={enterMainMenu}/>}
        {mainMenu&& <HowtoPlay startGame={startGame}/>}
        {gameStart && <Board />}
      </div>
    );
  }
}

export default App;
