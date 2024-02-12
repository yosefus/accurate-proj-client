import { Route, Routes } from "react-router-dom";

export default function InfoViewer(){
    
    return (
        <Routes>
            <Route path="/messages/:msgId" element={<><div>MessagePage</div></>} />
            <Route path="/leads/:leadId" element={<><div>LeadPage</div></>} />
        </Routes>
    )
}