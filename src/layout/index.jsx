import { Outlet, Route, Routes } from "react-router-dom";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";
import styles from "./style.module.css"
export default function Layout() {
    return (
        <>
            <div className={styles.layout}>
                <SideBar />
                <div>
                    <Content/>
                </div>
            </div>
        </>
    )
}