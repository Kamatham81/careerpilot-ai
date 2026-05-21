import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Register() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleRegister(e) {

        e.preventDefault()

        if (!name || !email || !password) {

            alert("Please fill all fields")
            return
        }

        alert("Registration Successful")

        navigate("/login")
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-6">

            <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">

                <h1 className="text-4xl font-bold text-center text-gray-900">

                    Create Account

                </h1>

                <p className="text-gray-500 text-center mt-3">

                    Join CareerPilot AI

                </p>

                <form
                    onSubmit={handleRegister}
                    className="mt-10 space-y-6"
                >

                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 p-4 rounded-2xl"
                    />

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

                        Register

                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">

                    Already have account?

                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold ml-2"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    )

}

export default Register