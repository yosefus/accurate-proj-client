import React, { useContext } from 'react'
import styles from "./style.module.css"
import { useParams } from 'react-router-dom'
import HeadLine from '../../components/HeadLine'
import { CampaignContext } from '../CampaignPage'
import FormatDate from '../../functions/FormatDate'
import { PopupContext } from '../../Context/Popup'
import LeadForm from '../../components/LeadForm'


export default function LeadPage() {
    const { leadId } = useParams();
    const context = useContext(CampaignContext);
    const campaign = context?.campaign || {}
    const toget = context?.toget
    const lid = campaign?.leads?.find?.(l => l.lead._id === leadId);

    const { openDialoge, closeDailog } = useContext(PopupContext)
    if (!lid) return <></>;
    return (
        <div className={styles.all}>
            <div>
                <HeadLine
                    primaryText={`${lid.lead.Fname} - ${lid.lead.Lname}`}
                    scontText={"פעיל"}
                    icone={<img src="/edit-04.svg" alt="icon" onClick={() => openDialoge({
                        comp: <LeadForm isUpdate={true} originalLead={lid.lead} toget={toget} closeDailog={closeDailog} />,
                        title: "עריכת נרשם"
                    })} />}
                />
            </div>
            <div className={styles.cub}>
                <div className={styles.container}>
                    <div className={styles.item}>שם פרטי<p className={styles.big}>{lid.lead.Lname || lid.lead.name}</p></div>
                    <div className={styles.item}>שם משפחה<p className={styles.big}>{lid.lead.Fname || lid.lead.name}</p></div>
                    <div className={styles.item}>טלפון<p className={styles.big}>{lid.lead.phone}</p></div>
                    <div className={styles.item}>אימייל<p className={styles.big}>{lid.lead.email}</p></div>
                </div>
                <div>
                    <div className={styles.item}>הערות<p className={styles.big}>{lid.lead.notes
                    }</p></div>
                    <br />
                </div>
                <div>
                    <div className={`${styles.gray} ${styles.date}`}>תאריך הצטרפות : {FormatDate(lid.joinDate)}</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>הודעות שנשלחו</p>
            </div>
        </div>
    )
}
