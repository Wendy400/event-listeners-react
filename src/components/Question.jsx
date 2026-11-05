import React from "react";
function Question() {
  function handleClick(number){
  	alert(`User selected Answer ${number}!`)
  }
  return (
<>
	<h1> QUESTION HERE </h1>
<button onClick={()=>handleClick(1)}> Answer 1</button>
<button onClick={()=>handleClick(2)}> Answer 2</button>
<button onClick={()=>handleClick(3)}> Answer 3</button>
<button onClick={()=>handleClick(4)}> Answer 4</button>
</>
  );
  
{/*when dealing with event listeners, two approaches are used: 
    1. Inline arrow functions, as demonstrated above,
     which is useful for passing parameters to the handler function.
    
     2. Separate handler functions without invoking it 
    eg <button onClick={handleClick}> Answer 2</button>, here the disadvantage is no params can be passed.
*/}
  
}
export default Question;