import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function DefaultLayout(){
    return (
        <div className="defaultHeader">
            <Header />
            <Outlet />
        </div>
    )
}
