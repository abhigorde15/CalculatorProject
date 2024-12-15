import styles from './CalButton.module.css'
function CalButton({button,handleOnButtonClick}){
   return(
    <button className={styles.button}  onClick={()=>handleOnButtonClick(button)} key={button}>{button}</button>
   )
}
export default CalButton;