import { Route, Routes } from "react-router-dom";
import InfoViewer from "./InfoViewer";
import styles from './style.module.css'

export default function campaignCampaignPage(){
    return (
        <>
        {/* TODO - middle */}
        <div className={styles.holdTabs}>

        <div>
        <>headline</>
        <>tabswitcher</>
        <Routes>
            <Route path="/" element={<>leadsTab</>} />
            <Route path="/leads/*" element={<>leadsTab</>} />
            <Route path="/messages/*" element={<>messagesTab</>} />
        </Routes>
        </div>

        
        <InfoViewer/>
        

        </div>
        </>
    )
}