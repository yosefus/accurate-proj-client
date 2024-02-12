// import React from 'react'
// import MenuItem from '../../components/MenuItem'
// export default function Avi({ list = [{ txt: "", icon: "", href: "" }] }) {
//   return (
//     <div>{list.map(li => <MenuItem txt={li.txt} icon={li.icon} href={li.href} key={li.txt} />)}</div>
//   )

import React from 'react'
import CampaignItem from '../../components/CampaignItem'

export default function Avi({ list = { txt: "", id: "" } }) {
  const txt = [{ txt: "gfdfhd jska lfhd sjs", id: "ghdsjs" }]
  return (
    <div>{txt.map(li => <CampaignItem txt={li.txt} id={li.id} key={li.id} />)}</div>
  )
}
