import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

const initialBox = [
  { id:1, color:'white', clicked:false },                       
  { id:2, color:'white', clicked:false },
  { id:3, color:'white', clicked:false },
  { id:4, color:'white', clicked:false },
  { id:5, color:'white', clicked:false },
  { id:6, color:'white', clicked:false },
  { id:7, color:'white', clicked:false },
  { id:8, color:'white', clicked:false },
  { id:9, color:'white', clicked:false },
];

const [boxes, setBoxes]  = useState (initialBox);
const [clickOrder, setClickOrder] = useState([]); //it has an array
const [allClicked , setAllClicked] = useState(false);

// orange colour change with delay
useEffect(()=>{
  if(allClicked){
    let delay=0;
    clickOrder.forEach((clickedId,index)=>{setTimeout( ()=>{setBoxes(prevBoxes => {return prevBoxes.map( box =>{
      if(box.id === clickedId){return {...box, color:'orange'};}
      return box;
    })})}, delay); delay += 100 });  //delay between each box to turn orange
  }
}, [allClicked , clickOrder] );

// clicking needs to be handled
const handleClick = (id) =>{
if (allClicked) 
  return; // prevents further clicking

// check all boxes are same as id and clicked
const updatedBoxes = boxes.map (box=>{
  if (box.id === id && !box.clicked) {
    return {...box, color:"green" , clicked:true };
  }
  return box;
})

//update the boxes
setBoxes(updatedBoxes);
// track of clickorder
setClickOrder([...clickOrder, id]);

if(clickOrder.length === 8){                             
  setAllClicked(true);                                   
}                                                     
}   

  return (
    <div className="App">
     
     {boxes.map(box => (<div 
      key={box.id}
      className= "box" 
      style={{backgroundColor: box.color}} 
      onClick={()=>{handleClick (box.id)}}  
      />   ))}
    </div> 
  );
}

export default App;

