import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Dashboard() {

    const navigate = useNavigate()

    const [applications, setApplications] = useState([])

    const [savedJobs, setSavedJobs] = useState([])

    useEffect(() => {

        fetchApplications()

        fetchSavedJobs()

    }, [])

    async function fetchApplications() {

        try {

            const res = await axios.get(
                "https://careerpilot-ai-cwrs.onrender.com/applications"
            )

            setApplications(res.data)

        }

        catch (err) {

            console.log(err)

        }

    }

    async function fetchSavedJobs() {

        try {

            const res = await axios.get(
                "https://careerpilot-ai-cwrs.onrender.com/saved-jobs"
            )

            setSavedJobs(res.data)

        }

        catch (err) {

            console.log(err)

        }

    }

    return (

        <div className="min-h-screen bg-[#f5f7fb]">

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* TOP */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl">

                    <h1 className="text-5xl font-extrabold">

                        Welcome Back 👋

                    </h1>

                    <p className="mt-4 text-lg text-blue-100">

                        Track your career growth with AI-powered insights.

                    </p>

                </div>

                {/* STATS */}

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">

                        <h2 className="text-gray-500 text-lg">

                            Applications

                        </h2>

                        <p className="text-5xl font-bold mt-4 text-blue-600">

                            {applications.length}

                        </p>

                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">

                        <h2 className="text-gray-500 text-lg">

                            Saved Jobs

                        </h2>

                        <p className="text-5xl font-bold mt-4 text-green-600">

                            {savedJobs.length}

                        </p>

                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">

                        <h2 className="text-gray-500 text-lg">

                            Resume Score

                        </h2>

                        <p className="text-5xl font-bold mt-4 text-purple-600">

                            92%

                        </p>

                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">

                        <h2 className="text-gray-500 text-lg">

                            Interview Score

                        </h2>

                        <p className="text-5xl font-bold mt-4 text-orange-600">

                            88%

                        </p>

                    </div>

                </div>

                {/* MAIN GRID */}

                <div className="grid lg:grid-cols-3 gap-8 mt-10">

                    {/* LEFT */}

                    <div className="lg:col-span-2 space-y-8">

                        {/* RECENT ACTIVITY */}

                        <div className="bg-white p-8 rounded-3xl shadow-sm">

                            <h2 className="text-3xl font-bold text-gray-900">

                                Recent Applications

                            </h2>

                            <div className="space-y-6 mt-8">

                                {applications.length === 0 ? (

                                    <p className="text-gray-500">

                                        No Applications Yet

                                    </p>

                                ) : (

                                    applications.slice(0, 5).map((app, index) => (

                                        <div
                                            key={index}
                                            className="flex justify-between border-b pb-4"
                                        >

                                            <div>

                                                <h3 className="font-semibold">

                                                    {app.name}

                                                </h3>

                                                <p className="text-gray-500">

                                                    {app.email}

                                                </p>

                                            </div>

                                            <a
                                                href={`https://careerpilot-ai-cwrs.onrender.com/${app.resume}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-600 font-bold"
                                            >

                                                View Resume

                                            </a>

                                        </div>

                                    ))

                                )}

                            </div>

                        </div>

                        {/* AI INSIGHTS */}

                        <div className="bg-gradient-to-r from-black to-gray-800 p-8 rounded-3xl text-white shadow-xl">

                            <h2 className="text-3xl font-bold">

                                AI Career Insights

                            </h2>

                            <p className="mt-6 text-gray-300 leading-8">

                                Your frontend profile strongly matches startup
                                opportunities. Improve backend and system design
                                skills to increase your AI job match score.

                            </p>

                            <button className="mt-8 bg-white text-black px-6 py-3 rounded-2xl font-semibold">

                                View Analysis

                            </button>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="space-y-8">

                        {/* PROFILE */}

                        <div className="bg-white p-8 rounded-3xl shadow-sm">

                            <h2 className="text-3xl font-bold text-gray-900">

                                Profile Strength

                            </h2>

                            <div className="mt-8">

                                <div className="flex justify-between mb-3">

                                    <span>

                                        Completion

                                    </span>

                                    <span className="font-bold text-blue-600">

                                        82%

                                    </span>

                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-4">

                                    <div className="bg-blue-600 h-4 rounded-full w-[82%]">

                                    </div>

                                </div>

                            </div>

                            <div className="space-y-4 mt-8">

                                <div className="bg-gray-100 p-4 rounded-2xl">

                                    ✔ Resume Uploaded

                                </div>

                                <div className="bg-gray-100 p-4 rounded-2xl">

                                    ✔ Skills Added

                                </div>

                                <div className="bg-gray-100 p-4 rounded-2xl">

                                    ✔ Projects Added

                                </div>

                                <div className="bg-red-100 text-red-600 p-4 rounded-2xl">

                                    ✖ Add Certifications

                                </div>

                            </div>

                        </div>

                        {/* QUICK ACTIONS */}

                        <div className="bg-white p-8 rounded-3xl shadow-sm">

                            <h2 className="text-3xl font-bold text-gray-900">

                                Quick Actions

                            </h2>

                            <div className="flex flex-col gap-5 mt-8">

                                <button
                                    onClick={() => navigate("/resume-builder")}
                                    className="bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
                                >

                                    Build AI Resume

                                </button>

                                <button
                                    onClick={() => navigate("/mock-interview")}
                                    className="bg-purple-600 text-white py-4 rounded-2xl font-semibold hover:bg-purple-700 transition"
                                >

                                    Start Mock Interview

                                </button>

                                <button
                                    onClick={() => navigate("/jobs")}
                                    className="bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
                                >

                                    Find Matching Jobs

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Dashboard