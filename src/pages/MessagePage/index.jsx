import React, { useContext } from 'react'
import HeadLine from '../../components/HeadLine'
import { useParams } from 'react-router-dom'
import Accordion from '../../components/Accordion'
import style from './style.module.css'
import { campaignContext } from '../CampaignPage'
import ListNoRead from '../../functions/GetAllLeadsNoGet'
export default function MessagePage() {
    const context = useContext(campaignContext)
    const { campaign } = context
    // this function shoud get all messages of current campaign
    // msgId should be arrive from useParams
    const { msgId } = useParams()

    const MsgToPrint = campaign.msg.find(i => i._id === msgId)
    console.log('one msg', MsgToPrint);
    const nameTitleMsg = MsgToPrint.subject
    const dateMsg = new Date(MsgToPrint.creationDate)

    const leadsSent = `נשלח ל ${MsgToPrint.leads.length} נרשמים`

    const totalAllLeadsOfCampaign = campaign.leads.length
    const totalLeadsNoSent = campaign.leads.length - MsgToPrint.leads.length
    const leadsNoSent = `לא נשלח ל ${totalLeadsNoSent} נרשמים`
    const allLeadsOfCampaign = campaign.leads
    const dateFixMsg = ` נוצר ב ${dateMsg.getDate()}/${dateMsg.getMonth() + 1}/${dateMsg.getFullYear()} ${dateMsg.getHours()}:${dateMsg.getMinutes() < 10 ? '0' + dateMsg.getMinutes() : dateMsg.getMinutes()}`
    const icone = <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2505 17L18.2504 18.094C17.7199 18.6741 17.0006 19 16.2506 19C15.5006 19 14.7813 18.6741 14.2509 18.094C13.7197 17.5151 13.0005 17.1901 12.2507 17.1901C11.5009 17.1901 10.7816 17.5151 10.2505 18.094M1.25049 19H2.92503C3.41421 19 3.6588 19 3.88898 18.9447C4.09305 18.8957 4.28814 18.8149 4.46708 18.7053C4.66892 18.5816 4.84187 18.4086 5.18777 18.0627L17.7505 5.49998C18.5789 4.67156 18.5789 3.32841 17.7505 2.49998C16.9221 1.67156 15.5789 1.67156 14.7505 2.49998L2.18775 15.0627C1.84184 15.4086 1.66889 15.5816 1.54521 15.7834C1.43555 15.9624 1.35474 16.1574 1.30575 16.3615C1.25049 16.5917 1.25049 16.8363 1.25049 17.3255V19Z" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    const listLeadsNoGet = ListNoRead(MsgToPrint.leads, campaign.leads)
    console.log('leads no get', listLeadsNoGet);
    return (
        <div className={style.divMain}>
            <div className={style.centerDiv}>

                <div className={style.title}>

                    <HeadLine primaryText={nameTitleMsg} scontText={dateFixMsg} icone={icone} />
                </div>
                <div className={style.contentDiv}>

                    <p className={style.contentMsg}>{MsgToPrint.content}</p>
                </div>
                <Accordion title={leadsSent}>{campaign.leads.map(i => <div key={i.id}>{i.name}</div>)}</Accordion>
                <Accordion title={leadsNoSent}>{campaign.leads.map(i => <div key={i.id}>{i.name}</div>)}</Accordion>
            </div>

        </div>
    )
}
