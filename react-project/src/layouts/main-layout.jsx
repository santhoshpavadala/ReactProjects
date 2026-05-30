import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";

function MainLayout() { //{children}
    return(
        <>
            <Header/>
            <div className="layout-container">
                <Sidebar />

                <main className="content">
                    {/* {children} */}

                    <Outlet/>
                </main>
            </div>
        </>
    );
}

export default MainLayout;