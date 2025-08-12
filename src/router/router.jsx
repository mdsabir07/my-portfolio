import { createBrowserRouter } from "react-router";
import App from "../App";
import ProjectDetails from "../components/Projects/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App
    },
    {
        path: '/projects/:projectId',
        Component: ProjectDetails
    }
])