import { useState } from 'react'
import TopicList from "./components/TopicList.jsx";
import "./assets/app.css";
import { Outlet } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Worrrrk!</h1>
            <Outlet/>
        </>
    )
}

export default App
