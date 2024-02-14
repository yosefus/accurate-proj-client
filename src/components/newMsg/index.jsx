import { useContext } from "react"
import styles from "./style.module.css"
import { PopupContext } from "../../Context/Popup"
import MessageForm from "../MessageForm"
export default function NewMsg() {
    const {openDialoge,closeDailog} = useContext(PopupContext)
return(
    <>
   
    <div className={styles.holdNewMsg}>
        <div className={styles.newMsg}>
            
        <button onClick={()=>openDialoge({comp:<MessageForm closeDailog={closeDailog}/>,title:"הודעה חדשה"})}>

            <span>
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25049 1V9M1.25049 5H9.25049" stroke="#0E9D85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </span>
       
      הודעה חדשה  

        </button>
        </div>
    </div>

    </>
)    
}