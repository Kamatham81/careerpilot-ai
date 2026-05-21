import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    function handleLogout() {

        localStorage.removeItem("token")

        navigate("/login")
    }

    return (

        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">

            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* LOGO */}

                <Link
                    to="/"
                    className="text-3xl font-extrabold text-blue-600"
                >

                    CareerPilot AI

                </Link>


                {/* MENU */}

                <div className="flex items-center gap-7">

                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Home
                    </Link>

                    <Link
                        to="/jobs"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Jobs
                    </Link>

                    <Link
                        to="/dashboard"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Dashboard
                    </Link>
                      <Link to="/resume-builder" className="text-gray-700 hover:text-blue-600 font-medium">
        AI Resume
    </Link>

    <Link to="/mock-interview" className="text-gray-700 hover:text-blue-600 font-medium">
        AI Mock
    </Link>

                    <Link
                        to="/saved-jobs"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Saved Jobs
                    </Link>

                    <Link
                        to="/applications"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Applications
                    </Link>

                    <Link
                        to="/profile"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Profile
                    </Link>


                    {!token ? (

                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
                        >

                            Get Started

                        </Link>

                    ) : (

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-red-600 transition"
                        >

                            Logout

                        </button>

                    )}

                </div>

            </div>

        </nav>

    )

}

export default Navbar