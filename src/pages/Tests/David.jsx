import React, { useContext } from 'react'
import InputText from '../../components/InputText'
import InputArea from '../../components/InputArea'
import HeadLine from '../../components/HeadLine'
import InputSearch from '../../components/InputSearch'
import LeadItem from '../../components/LeadItem'
import MessageForm from '../../components/MessageForm'
import { PopupContext } from '../../Context/Popup'
import Label from '../../components/Label'


export default function David() {
  const{openDialoge}=useContext(PopupContext)
  return (
    <button onClick={() => openDialoge({comp:<MessageForm />, title: "הודעה חדשה"})}> klick</button>
  )
}

// export default function David() {

//   return (
//     <MessageForm  />
//   )
// }
