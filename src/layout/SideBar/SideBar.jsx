import MenuItem from "../../components/MenuItem";
import styles from "../style.module.css"
export default function SideBar() {

    return (
        <>
            <div>
                <div className={styles.top}>

        <h1 className={styles.logoName}>
       אנגייג'ר
      </h1>
                <MenuItem href={"/settings"} txt={"הגדרות"} icon={<img src="/settingsIcon.svg"/>}/>
                </div>

                <div className={styles.buttom}>
                <p className={styles.lists}>רשימות</p>

                </div>
    </div>
        </>
    )
}