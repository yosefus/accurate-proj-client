import React from 'react'
import Accordion from '../../components/Accordion'
import MessagePage from '../MessagePage'
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
  const tit = 'eikfemf'
  return (
    <div>
      <Accordion title={tit}>{listRead.map(i => <div key={i.id}>{i.name}</div>)}</Accordion>
      <MessagePage list={list} />
    </div>
  )
}
