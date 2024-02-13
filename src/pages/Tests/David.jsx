import React, { useContext } from 'react'
import InputText from '../../components/InputText'
import InputArea from '../../components/InputArea'
import HeadLine from '../../components/HeadLine'
import InputSearch from '../../components/InputSearch'
import LeadItem from '../../components/LeadItem'
import MessageForm from '../../components/MessageForm'
import { PopupContext } from '../../Context/Popup'
import Label from '../../components/Label'
import LeadForm from '../../components/LeadForm'


export default function David() {
  const{openDialoge,closeDailog }=useContext(PopupContext)
  // console.log(closeDailog);
  return (
    <button onClick={() => openDialoge({comp:<LeadForm closeDailog={closeDailog}  />, title: "נרשם חדש"})}> klick</button>
)}

// export default function David() {

//   return (
//     <MessageForm  />
//   )
// }
