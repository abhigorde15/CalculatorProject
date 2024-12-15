import CalButton from './CalButton';
import styles from './CalButtons.module.css'
function CalButtons({buttons,handleOnButtonClick}){
  return(
<div className={styles.buttons}>
  {buttons.map(button=> <CalButton  button={button} handleOnButtonClick={handleOnButtonClick} key={button}></CalButton>)}
 
 
</div>
  )
}
export default CalButtons;