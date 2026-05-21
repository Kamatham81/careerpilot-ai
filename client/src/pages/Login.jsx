import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {

        e.preventDefault()

        if (!email || !password) {

            alert("Please fill all fields")
            return
        }

        // SAVE TOKEN
        localStorage.setItem("token", "careerpilot-user")

        // SAVE USER
        localStorage.setItem("user", email)

        // OPEN DASHBOARD
        navigate("/dashboard")
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-6">

            <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">

                <h1 className="text-4xl font-bold text-center text-gray-900">

                    Welcome Back

                </h1>

                <p className="text-gray-500 text-center mt-3">

                    Login to CareerPilot AI

                </p>

                <form
                    onSubmit={handleLogin}
                    className="mt-10 space-y-6"
                >

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 p-4 rounded-2xl"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 p-4 rounded-2xl"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
                    >

                        Login

                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold ml-2"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>

    )

}

export default Login