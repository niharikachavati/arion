
import './App.css';
import React,{useState} from 'react';
import react from 'react';
 

 function App(){
let [count, setCount] = useState(1);

  return( 
<div className='App'>
  <div className ='card_content'>
    <header className='card_header'>
      <h2>Increment and Decrement</h2>
  
      <button style = {{marginLeft:"1rem",display: "inline"}} onClick={() => setCount(count*3)}> +  </button>
     
     <h2 class = "card__title" style = {{marginLeft:"1rem",display: "inline"}}> {count <= 1 ? (count = 1) : count}</h2>
    
     <button style = {{marginLeft:"1rem",display: "inline"}}  onClick= {()=> setCount(count/3)}> - </button> 
     
     </header>
  </div>
</div>
);

}








export default App;
