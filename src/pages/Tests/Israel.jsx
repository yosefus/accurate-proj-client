import React from 'react'
import ListMessage from '../../components/ListMessage'
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
      <ListMessage listMessage={list} />
    </div>
  )
}
