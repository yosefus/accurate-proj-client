import React, { useContext } from 'react'
import style from "../../components/TabSwitcher/style.module.css";
import { Route, Routes } from 'react-router-dom';
import Popup from '../../Context/Popup';
import {PopupContext} from '../../Context/Popup';
import apiReq from '../../functions/ApiReq';


export default function Asaf() {
  const contex = useContext({...PopupContext});
  
 
  return (
    <div style={{height: '100vh'}}>


     <button
        onClick={() => contex.openDialoge({title: "test", comp: <p>hii asaf</p>})}
      >
        popup
      </button>
    </div>
  )
}
