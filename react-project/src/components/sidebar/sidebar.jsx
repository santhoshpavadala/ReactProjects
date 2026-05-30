import { NavLink } from "react-router-dom";
function Sidebar() {
    return(
        <>
        <aside className="sidebar">
            <ul>
                <li>
                    <NavLink to="/">
                        Home Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users-dashboard">
                        Users Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts-dashboard">
                        Posts Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/todos-dashboard">
                        Todos Dashboard
                    </NavLink>
                </li>
                <li>Reports</li>
                <li>Settings</li>
                <li>Settings</li>
            </ul>
        </aside>
        </>
    );
}

export default Sidebar;