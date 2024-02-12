import React from 'react'
import MessagePage from '../MessagePage'
export default function Israel() {
  const list = [{
    id: '1234',
    context: '',
    who: '',
    isActive: true,
    name: 'bla bla bla',
    date: new Date()
  },
  {
    id: '5678',
    context: '',
    who: '',
    isActive: true,
    name: 'bla bla bla',
    date: new Date()
  }
    ,
  {
    id: '9123',
    context: '',
    who: '',
    isActive: true,
    name: 'bla bla bla',
    date: new Date()
  }]
  return (
    <div>
      <MessagePage list={list} />
    </div>
  )
}
