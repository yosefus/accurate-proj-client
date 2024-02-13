import React from 'react'
import PopOver from '../../components/PopOver'
export default function Israel() {
  const listRead = [{
    id: '1234',
    name: 'israel',
    email: 'a@a',
    date: new Date()
  },
  {
    id: '5678',
    name: 'israel',
    email: 'a@a',
    date: new Date()
  }
    ,
  {
    id: '9123',
    name: 'israel',
    email: 'a@a',
    date: new Date()
  }]
  const listNoRead = [{
    id: '1234',
    name: 'israel',
    email: 'a@a',
    date: new Date()
  },
  {
    id: '5678',
    name: 'israel',
    email: 'a@a',
    date: new Date()
  }
    ,
  {
    id: '9123',
    name: 'israel',
    email: 'a@a',
    date: new Date()
  }]
  const icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  const tit = 'eikfemf'
  return (
    <div>
      <PopOver list={listRead}>{icon}</PopOver>

    </div>
  )
}
