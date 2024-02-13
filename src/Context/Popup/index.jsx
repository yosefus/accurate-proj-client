import React, {createContext, useRef, useState} from "react";
import style from "./style.module.css";

// contex
export const PopupContext = createContext(null);

export default function Popup({children}) {
  // {title: '', component: <></>}
  const [popupContent, setpopupContent] = useState(false);

  const tesrRef = useRef(null);

  function openDialoge({comp, title}) {
    if (!tesrRef.current) return;

    setpopupContent({comp, title});
    tesrRef.current.showModal();
  }

  function closeDailog() {
    if (!tesrRef.current) return;
    setpopupContent(false);
    tesrRef.current.close();
  }

  const handleClick = (e)=>{
    if (e.target === tesrRef.current) {
      tesrRef.current.close();
    }
  }

  return (
    <>
      <PopupContext.Provider value={{closeDailog, openDialoge}}>
        {children}
      </PopupContext.Provider>

      {/* <div> */}
      <dialog ref={tesrRef} onClick={handleClick}>
        <div className={style.title}>
          <div className={style.Ptitle} >{popupContent.title}</div>
          <button className={style.closeButtsn } onClick={closeDailog}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6.59631L6 18.5963M6 6.59631L18 18.5963"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>{popupContent.comp}</div>
      </dialog>
      {/* </div> */}
    </>
  );
}

// dialog
