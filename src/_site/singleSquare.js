import React from 'react'

class SingleSquare extends React.Component{
  constructor(props){
    super(props)
    this.state={
      style:{background: ""},
      hover: false,
      clicked: false,

    }
  }
  clickHandler=()=>{
  let {style, clicked}=this.state
  let{placeBoat, index, value, checkPlacementMode, checkBattleMode, fire}=this.props
  console.log(`battleMode is ${checkBattleMode}`);
  console.log(`placementMode is ${checkPlacementMode}`);
      if(checkPlacementMode()){
      placeBoat(index)
    }else if(checkBattleMode()){
      fire(index)
    }
  }

  hoverHandler=()=>{
  let {onHoverHighlight, index, checkPlacementMode, checkBattleMode}=this.props
    if(checkPlacementMode()){
      onHoverHighlight(index)
    }else if(checkBattleMode()){
    }
  }
  render(){
    let{style}=this.state
    let{value,index}=this.props
    return(
      <div style={style} className="single-square" onMouseOver={this.hoverHandler}  onClick={this.clickHandler} id={index}>
      {value}
      </div>
    );
  }
}
export default SingleSquare
