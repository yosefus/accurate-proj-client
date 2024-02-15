import React from "react"
import ListMessage from "../components/ListMessage/index"

function recievedMsg(msg, leads) {
    let result = msg.leads.filter(v => v.status == "sent")
    let map = result.map(v => v._id)
    let leads2 = map.map(id => leads.find(l => id === l.lead._id))
    return leads2
}

function notRecievedMsg(leads, recievedMsgList) {
    let result = leads.filter(v => !recievedMsgList.find(l => l._id === v.lead._id))
    let map = result.map(v => v.lead)
    return map
}

function leadMessages(leads, msg) {
    let result = leads.lead.filter(v => v._id !== msg.leads.lead)
    // return <ListMessage listMessage={result} />
}

export { recievedMsg, notRecievedMsg, leadMessages }