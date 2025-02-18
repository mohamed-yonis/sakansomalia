import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AddProject from "./Components/AddProject.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Login from "./Components/Login.jsx";
import ProjectDetails from "./Components/ProjectDetails.jsx";
import Projects from "./Components/Projects.jsx";
import RecentProjects from "./Components/RecentProjects.jsx";
import AboutContent from "./Components/AboutContent.jsx";
import Contact from "./Components/Contact.jsx";
const Router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "addproject",
    element: <AddProject />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "rectenProjects",
    element: <RecentProjects />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },
  {
    path: "/aboutcontet",
    element: <AboutContent />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
