import {NavLink} from "react-router-dom";
import FormatDate from "../../functions/FormatDate";
import LeadItem from "../LeadItem";
import InputSearch from "../InputSearch";
import styles from "./style.module.css";
import { useState } from "react";
export default function LeadsTab({LeadList, idCampaign}) {
  // [{name:"",date:"",email:"",id:""},{}]
const [searchToPrint, setsearchToPrint] = useState(LeadList)
const hendelChenge=(e)=>setsearchToPrint (LeadList.filter(v=>
    v.lead.Fname.includes(e.target.value) || v.lead.Lname.includes(e.target.value) ))
  return (
    <>
      <InputSearch onChange={hendelChenge} setsearchToPrint={setsearchToPrint}  LeadList={LeadList}/>
      {searchToPrint.map((i) => {
        return (
          <LeadItem
            key={i._id}
            date={FormatDate(i?.joinDate)}
            to={`/campaign/${idCampaign}/leads/${i.lead._id}`}
            email={i?.lead?.email}
            name={`${i?.lead?.Fname} - ${i?.lead?.Lname}`}
          />
        );
      })}
    </>
  );
}
