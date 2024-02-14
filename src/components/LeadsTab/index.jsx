import { NavLink } from "react-router-dom";
import FormatDate from "../../functions/FormatDate";
import LeadItem from "../LeadItem";
import styles from "./style.module.css"
export default function LeadsTab({ LeadList, idCampaign }) {
    // [{name:"",date:"",email:"",id:""},{}]

    return (
        <>
            {LeadList.map((i) => {
                return (
                    <LeadItem key={i._id} date={FormatDate(i?.joinDate)} to={`/campaign/${idCampaign}/leads/${i.lead._id}`} email={i?.lead?.email} name={i?.lead?.name} />
                )
            })}
        </>

    )
} 