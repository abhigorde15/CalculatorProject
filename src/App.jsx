
import { useState } from 'react';
import styles from'./App.module.css'
import CalButtons from './Components/CalButtons';
import CalculatorDisplay from './Components/CalculatorDisplay'

function App() {
   let buttons =  ['C',1,2,'+',3,4,'-',5,6,'*',7,8,'/','=',9,0,'.'];
   const [calVal , setCalVal] = useState("");
   let handleOnButtonClick =(button)=>{
    let buttonval = calVal+button
    
    if(button == 'C'){
      setCalVal("")
    }
    else if(button == '='){
      let result = eval(calVal);
      setCalVal(result);
    }
    else{
      setCalVal(buttonval);
    }
    
    
   }
  return (
    
      <div className={styles.calculator}>
        <CalculatorDisplay calVal= {calVal}></CalculatorDisplay>
        <CalButtons buttons={buttons} handleOnButtonClick={handleOnButtonClick}></CalButtons> 
      </div>
    
  )
}

export default App
