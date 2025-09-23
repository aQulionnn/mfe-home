import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home.tsx";
import Auth from "auth/Auth";
import Layout from "./components/Layout/Layout.tsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={ <Layout><Auth /></Layout> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App