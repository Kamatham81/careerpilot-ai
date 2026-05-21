import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Jobs from "./pages/Jobs"
import SavedJobs from "./pages/SavedJobs"
import Applications from "./pages/Applications"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
import ResumeBuilder from "./pages/ResumeBuilder"
import MockInterview from "./pages/MockInterview"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/jobs"
                element={<Jobs />}
            />

            <Route
                path="/saved-jobs"
                element={<SavedJobs />}
            />

            <Route
                path="/applications"
                element={<Applications />}
            />

            <Route
                path="/profile"
                element={<Profile />}
            />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/mock-interview" element={<MockInterview />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>
                }
            />

        </Routes>

    )

}

export default App