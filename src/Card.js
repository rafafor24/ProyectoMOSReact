import React from "react"
//import { createReadStream } from "fs";

export default ({
  card,
  onClick,
  materias,
  colors
}) => (
  <th><button type="button" 
  className={card.name[0]==="-"?"btn btn-primary btn-lg btn-block":card.name[0]==="0"?"btn btn-info btn-lg btn-block":"btn btn-warning btn-lg btn-block"} 
  onClick={onClick} 
  style={{backgroundColor: ''+colors[card.name[0]!=="-"?parseInt(card.name):0].color,borderColor:'black',color:card.name[0]!=="-"?"white":"black"}}
  disabled={card.name[0]==="-"}>{card.name==="0"||card.name==="1"||card.name==="2"||card.name==="3"
  ||card.name==="4"||card.name==="5"||card.name==="6"||card.name==="7"?materias[parseInt(card.name)].nombre:card.name}</button></th>

  )
  