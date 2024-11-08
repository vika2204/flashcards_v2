import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import TopicList from "./components/TopicList.jsx";
import FlashcardList from "./components/FlashcardList.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/topics/:topicId",
                element: <FlashcardList />,
            },
            {
                path: "/",
                element: <TopicList />,
            },
        ]

    },

]);


createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
