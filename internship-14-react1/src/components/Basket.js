import React from "react";

class Basket extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      isStriked:false
    }
  }
  handleGroceryClick=()=>{
    console.log("basket state")
    this.setState({
      isStriked:true,
    })
  }
render(){
var divStyle = {
  display:"inline-block"
}
var spanStyle = {
  color:"black"
}
var textStyle = {
  textDecoration:"none"
}
if(this.state.isStriked)
{
divStyle.display="none"
spanStyle.color="white"
textStyle.textDecoration="line-through"
}

  return (
    <div onClick={this.handleGroceryClick} >
    <span style={textStyle} >{this.props.name} </span><span style ={spanStyle}> {this.props.quantity}</span> {this.state.isStriked}{" "}
    <button style={divStyle} onClick={this.props.handleGroceryRemove}>
      -
    </button>{" "}
  </div>
   
  );
}
}

export default Basket;
