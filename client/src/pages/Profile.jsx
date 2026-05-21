import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"

function Profile() {

    const [user, setUser] = useState(null)

    async function fetchProfile() {

        try {

            const token = localStorage.getItem("token")

            const response = await axios.get(
                "https://careerpilot-ai-cwrs.onrender.com/dashboard",
                {
                    headers: {
                        Authorization: token
                    }
                }
            )

            setUser(response.data.user)

        }

        catch (error) {

            console.log(error)

        }

    }

    useEffect(() => {

        fetchProfile()

    }, [])

    return (

        <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-white to-[#f8fafc]">

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[35px] p-10 text-white shadow-2xl"
                >

                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">

                        <div className="flex items-center gap-8">

                            {/* PROFILE IMAGE */}

                            <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-5xl font-bold border-4 border-white/30">

                                {user?.name?.charAt(0)}

                            </div>

                            <div>

                                <h1 className="text-5xl font-extrabold">

                                    {user?.name}

                                </h1>

                                <p className="text-blue-100 mt-4 text-xl">

                                    {user?.email}

                                </p>

                                <div className="flex gap-4 mt-6 flex-wrap">

                                    <span className="bg-white/20 px-5 py-2 rounded-full text-sm">

                                        AI Optimized Profile

                                    </span>

                                    <span className="bg-green-400 text-black px-5 py-2 rounded-full text-sm font-semibold">

                                        Active Candidate

                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* SCORE */}

                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-center border border-white/20">

                            <h2 className="text-5xl font-extrabold">

                                92%

                            </h2>

                            <p className="text-blue-100 mt-3">

                                Career Score

                            </p>

                        </div>

                    </div>

                </motion.div>


                {/* ANALYTICS */}

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-[30px] shadow-lg"
                    >

                        <div className="text-5xl">
                            📄
                        </div>

                        <h2 className="text-4xl font-bold mt-6 text-gray-900">

                            12

                        </h2>

                        <p className="text-gray-500 mt-3 text-lg">

                            Resume Versions

                        </p>

                    </motion.div>


                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-[30px] shadow-lg"
                    >

                        <div className="text-5xl">
                            🚀
                        </div>

                        <h2 className="text-4xl font-bold mt-6 text-gray-900">

                            28

                        </h2>

                        <p className="text-gray-500 mt-3 text-lg">

                            Applications Sent

                        </p>

                    </motion.div>


                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-[30px] shadow-lg"
                    >

                        <div className="text-5xl">
                            🎤
                        </div>

                        <h2 className="text-4xl font-bold mt-6 text-gray-900">

                            18

                        </h2>

                        <p className="text-gray-500 mt-3 text-lg">

                            Mock Interviews

                        </p>

                    </motion.div>


                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-[30px] shadow-lg"
                    >

                        <div className="text-5xl">
                            📊
                        </div>

                        <h2 className="text-4xl font-bold mt-6 text-gray-900">

                            87%

                        </h2>

                        <p className="text-gray-500 mt-3 text-lg">

                            Interview Success

                        </p>

                    </motion.div>

                </div>


                {/* AI INSIGHTS */}

                <div className="grid lg:grid-cols-2 gap-10 mt-14">

                    {/* LEFT */}

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-white p-10 rounded-[35px] shadow-lg"
                    >

                        <h2 className="text-3xl font-bold text-gray-900">

                            AI Career Insights

                        </h2>

                        <div className="space-y-6 mt-8">

                            <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl">

                                <h3 className="font-bold text-blue-700 text-lg">

                                    Resume Optimization

                                </h3>

                                <p className="text-gray-600 mt-2 leading-7">

                                    Your resume is performing better than 82% of candidates.

                                </p>

                            </div>

                            <div className="bg-green-50 border border-green-100 p-5 rounded-2xl">

                                <h3 className="font-bold text-green-700 text-lg">

                                    Skill Recommendation

                                </h3>

                                <p className="text-gray-600 mt-2 leading-7">

                                    Learning Next.js and System Design can improve your match score.

                                </p>

                            </div>

                            <div className="bg-purple-50 border border-purple-100 p-5 rounded-2xl">

                                <h3 className="font-bold text-purple-700 text-lg">

                                    Interview Readiness

                                </h3>

                                <p className="text-gray-600 mt-2 leading-7">

                                    Your communication confidence increased by 24%.

                                </p>

                            </div>

                        </div>

                    </motion.div>


                    {/* RIGHT */}

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-br from-black to-gray-900 text-white p-10 rounded-[35px] shadow-2xl"
                    >

                        <h2 className="text-3xl font-bold">

                            AI Growth Tracker

                        </h2>

                        <p className="text-gray-400 mt-5 leading-8 text-lg">

                            CareerPilot AI continuously analyzes your progress and identifies areas for growth.

                        </p>

                        <div className="space-y-8 mt-10">

                            <div>

                                <div className="flex justify-between mb-3">

                                    <span>Resume Quality</span>

                                    <span>92%</span>

                                </div>

                                <div className="w-full bg-gray-700 h-3 rounded-full">

                                    <div className="bg-blue-500 h-3 rounded-full w-[92%]"></div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-3">

                                    <span>Technical Skills</span>

                                    <span>85%</span>

                                </div>

                                <div className="w-full bg-gray-700 h-3 rounded-full">

                                    <div className="bg-green-500 h-3 rounded-full w-[85%]"></div>

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-3">

                                    <span>Interview Readiness</span>

                                    <span>88%</span>

                                </div>

                                <div className="w-full bg-gray-700 h-3 rounded-full">

                                    <div className="bg-purple-500 h-3 rounded-full w-[88%]"></div>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </div>

    )

}

export default Profile