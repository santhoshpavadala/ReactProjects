import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import HomeDashboard from "../pages/home-dashboard";
import UsersDashboard from "../pages/users-dashboard";
import PostsDashboard from "../pages/posts-dashboard";
import TodosDashboard from "../pages/todos-dashboard";

function AppRoutes() {
    return(
        <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<HomeDashboard />}
          />

          <Route
            path="/users-dashboard"
            element={<UsersDashboard />}
          />

          <Route
            path="/posts-dashboard"
            element={<PostsDashboard />}
          />

          <Route
            path="/todos-dashboard"
            element={<TodosDashboard />}
          />

        </Route>

      </Routes>
    </BrowserRouter>

    );
}

export default AppRoutes;