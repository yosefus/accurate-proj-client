import { Route, Routes } from "react-router-dom";
import HeadLine from "../../components/HeadLine";
import LeadsTab from "../../components/LeadsTab";
import ListMessage from "../../components/ListMessage";
import NewMsg from "../../components/newMsg";
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
<div  className={styles.tabSwitcher} >
    <TabSwitcher linkList={[{text:'נרשמים', href:'/campaign/123/leads/'},{text:'הודעות', href:'/campaign/141/messages/'}]}/>
</div>



        
        <Routes>
            <Route path="/" element={<LeadsTab LeadList={[{id:"33" ,name:"avior" , email:"yuiad@asd.com" , date:new Date()},{id:"34",name:"dani" , email:"tasdk@asd.com" , date:new Date()}]}/>} />
            <Route path="/leads/*" element={<LeadsTab LeadList={[{id:"33" ,name:"avior" , email:"yuiad@asd.com" , date:new Date()},{id:"34",name:"dani" , email:"tasdk@asd.com" , date:new Date()}]}/>}/>
            <Route path="/messages/*" element={<ListMessage listMessage={[{id:3124 ,name:"itamar",date:new Date()}]}/>} />
        </Routes>
  
        </div>





            </div>
        
        <InfoViewer/>
        

        </div>
        </>
    )
}