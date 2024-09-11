import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./views/layouts/DefaultLayout";
import ArticlesPage from "./views/articles/ArticlesPage";


export const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <ArticlesPage filter={""} />
            },
            {
                path: "/articles/:id",
                element: <ArticlesPage filter={""} />
            }
        ] 
    }
])