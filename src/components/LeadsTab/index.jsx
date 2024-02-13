import { NavLink } from "react-router-dom";
import LeadItem from "../LeadItem";
import styles from "./style.module.css"
export default function LeadsTab({ LeadList }) {
    // [{name:"",date:"",email:"",id:""},{}]
    return (
        <> 
        {/* {LeadList.map((i) => {
            return (
                <LeadItem date={`${i.date.getDate()}/${i.date.getMonth() + 1}/${i.date.getFullYear()}`} name={i.name} email={i.email} to={`/campaign/${123}/leads/${i.id}`}   />
            )
        })} */}
        </>

    )
} 