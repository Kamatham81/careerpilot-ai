import { createContext, useState, useEffect } from "react"
import api from "../api/axios"

export const AuthContext = createContext()

function parseToken(token) {
    try {
        return JSON.parse(atob(token.split(".")[1]))
    } catch {
        return null
    }
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = (token) => {
        localStorage.setItem("token", token)
        fetchUser()
    }

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    async function fetchUser() {

        try {

            const response = await api.get("/dashboard")
            setUser(response.data.user)

        } catch (error) {

            setUser(null)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        const token = localStorage.getItem("token")

        if (token) {
            fetchUser()
        } else {
            setLoading(false)
        }

    }, [])

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
