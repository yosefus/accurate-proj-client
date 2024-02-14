import { Route, Routes } from "react-router-dom";
import LeadPage from "../../LeadPage";
import MessagePage from "../../MessagePage";
import styles from "../style.module.css"
export default function InfoViewer() {

    return (
        <Routes>
            <Route path="/messages/:msgId" element={<div className={styles.leftSide}><MessagePage /></div>} />
            {/* [{id: title context }] */}
            <Route path="/leads/:leadId" element={<div className={styles.leftSide}><LeadPage /></div>} />
        </Routes>
    )
}