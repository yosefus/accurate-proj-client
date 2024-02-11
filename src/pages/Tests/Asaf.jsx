import React from 'react'
import TabSwitcher from '../../components/TabSwitcher'
import style from "../../components/TabSwitcher/style.module.css";
import { Route, Routes } from 'react-router-dom';

export default function Asaf() {
  
  let newarr=[{str:'messages', navLink:'messages'},
  {href:'messages', text:'הודעןת'},
  {href:'aaa', text:'רשומים'}];
  
  return (

     <TabSwitcher linkList={newarr}/> 
    
  )
}
