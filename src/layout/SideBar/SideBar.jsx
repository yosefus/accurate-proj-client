import { useEffect, useState } from "react";
import CampaignItem from "../../components/CampaignItem";
import MenuItem from "../../components/MenuItem";
import apiReq from "../../functions/ApiReq";
import styles from "../style.module.css";
export default function SideBar() {
    const [getData, setGetData] = useState([])
    useEffect(() => {
        apiReq({ name: "GET", path: "campaign" }).then((data) => setGetData(data))
    }, [])


    return (
        <>
            <div>
                <div className={styles.top}>

                    <h1 className={styles.logoName}>
                        אנגייג'ר
                    </h1>
                    <MenuItem href={"/settings"} txt={"הגדרות"} icon={<img src="/settingsIcon.svg" />} />
                </div>

                <div className={styles.buttom}>
                    <p className={styles.lists}>רשימות</p>
                    {
                        getData.map((v) => {
                            return <CampaignItem key={v._id} txt={v.title} id={v._id} />
                        })

                    }



                </div>
            </div>
        </>
    )
}