import { BrowserRouter, Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
