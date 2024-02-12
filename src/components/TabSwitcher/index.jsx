import React from "react";
import style from "./style.module.css";
import {NavLink} from "react-router-dom";

// linkList :  [ { } ]
export default function TabSwitcher({linkList}) {

  return (
    <ul className={style.ulList}>
        {linkList.map((v) =>  <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? style.theActiv : style.notActiv
                }
                to={v.href}
                >
                {v.text}
              </NavLink>
            </li>
          )
        }
    </ul>
  );
}
