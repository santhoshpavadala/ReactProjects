import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import HomeDashboard from "../pages/home-dashboard";
import UsersDashboard from "../pages/users-dashboard";
import PostsDashboard from "../pages/posts-dashboard";
import TodosDashboard from "../pages/todos-dashboard";
import ReactComponents from "../pages/react-components";
import ReactProps from "../pages/react-props";
import ReactUseState from "../pages/react-usestate";
import ReactEventsAndForms from "../pages/react-events&forms";
import LoginForm from "../pages/login";

function AppRoutes() {
    return(
        <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeDashboard />}/>
          <Route path="/react-components" element={<ReactComponents />}/>
          <Route path="/react-props" element={<ReactProps />}/>
          <Route path="/react-usestate" element={<ReactUseState />}/>
          <Route path="/react-eventsandforms" element={<ReactEventsAndForms/>}/>
          <Route path="/login-form" element={<LoginForm />} />
          <Route path="/users-dashboard" element={<UsersDashboard />}/>
          <Route path="/posts-dashboard" element={<PostsDashboard />}/>
          <Route path="/todos-dashboard" element={<TodosDashboard />}/>
        </Route>

      </Routes>
    </BrowserRouter>

    );
}

export default AppRoutes;