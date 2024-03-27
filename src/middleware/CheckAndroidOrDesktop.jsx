import { Outlet } from "react-router-dom"

export default function CheckAndroidOrDesktop() {
    if(window.screen.width >= 750) return <p>This Device not support, only mobile</p>

    return <Outlet />
}