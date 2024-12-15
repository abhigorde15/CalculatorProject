import styles from './CalculatorDisplay.module.css'
const CalculatorDisplay = ({calVal})=>{
  return(

     <input className={styles.input} value={calVal} readOnly></input>
    
  );
}
export default CalculatorDisplay;