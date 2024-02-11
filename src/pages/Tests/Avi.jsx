import React from 'react'
import MenuItem from '../../components/MenuItem'
export default function Avi({ list = [{ txt: "", icon: "", href: "" }] }) {
  return (
    <div>{list.map(li => <MenuItem txt={li.txt} icon={li.icon} href={li.href} key={li.txt} />)}</div>
  )
}

