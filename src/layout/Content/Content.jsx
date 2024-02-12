import { Outlet, Route, Routes } from "react-router-dom"
import CampaignPage from "../../pages/CampaignPage"
import styles from "../style.module.css"
export default function Content() {

    return (


        <Routes>
            <Route path="/settings" element={<>settings</>}/>
            <Route path="/campaign/:id/*" element={<CampaignPage/>}/>
                {/* <Route path="messages" element={
                    <div className={styles.info}>
                        <div className={styles.side} >messages</div>
                        <Outlet />
                    </div>
                }>
                    <Route path=":messageId" element={<div>messageID</div>} />
                </Route>
                <Route path="leads" element={
                <div className={styles.info}>
                    <div className={styles.side}>leads</div><Outlet />
                    </div>

                } >
                <Route path=":leadId" element={<div>asdasd</div>}/>
                </Route>
            </Route> */}
        </Routes>

    )
}