import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Itamar from './Itamar'
import Israel from './Israel'
import Asaf from './Asaf'
import Avi from './Avi'
import Shuki from './Shuki'
import David from './David'

export default function Test() {
  return (
     <Routes>
        <Route path='itamar' element={<Itamar/>} />
        <Route path='israel' element={<Israel/>} />
        <Route path='asaf/*' element={<Asaf/>} />
        <Route path='avi' element={<Avi/>} />
        <Route path='shuki' element={<Shuki/>} />
        <Route path='david' element={<David/>} />
    </Routes>
  )
}
