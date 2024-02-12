import { Route, Routes } from "react-router-dom";
import HeadLine from "../../components/HeadLine";
import ListMessage from "../../components/ListMessage";
import TabSwitcher from "../../components/TabSwitcher";
import InfoViewer from "./InfoViewer";
import styles from './style.module.css'

export default function campaignCampaignPage(){
    return (
        <>
        {/* TODO - middle */}
        <div className={styles.holdTabs}>

        <div>
            <div className={styles.headLine}>
        <HeadLine primaryText={"מנויי חדר כושר גבעת שמואל"} scontText={"24 מרשמים 3 הודעות"} icone={ <img src='/threePoints.svg' alt="three points"/>}/>
            </div>

<div  className={styles.tabSwitcher} >
    <TabSwitcher linkList={[{text:'נרשמים', href:'/campaign/123/leads/'},{text:'הודעות', href:'/campaign/141/messages/'}]}/>
</div>


        
        <Routes>
            <Route path="/" element={<>leadsTab</>} />
            <Route path="/leads/*" element={<>leadsTab</>} />
            <Route path="/messages/*" element={<ListMessage listMessage={[{id:3124 ,name:"itamar",date:new Date()}]}/>} />
        </Routes>
        </div>

        
        <InfoViewer/>
        

        </div>
        </>
    )
}