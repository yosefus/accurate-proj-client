export default function ListNoRead(allLeadsSentFromMsg, allLeadsCampaign) {
    console.log('all leads campaign', allLeadsCampaign);
    console.log('all leads sent', allLeadsSentFromMsg);
    const listLeadsNoGet = []
    for (const i of allLeadsCampaign) {
        for (const a in allLeadsSentFromMsg) {
            if (i.lead._id === allLeadsSentFromMsg[a].lead) {
                break
            } else if (a == allLeadsSentFromMsg.length - 1) {
                listLeadsNoGet.push(i)
            }
        }
    }
    return listLeadsNoGet
}