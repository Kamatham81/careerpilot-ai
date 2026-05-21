import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

function Applications() {

    const [applications, setApplications] = useState([])

    async function fetchApplications() {

        try {

            const response = await axios.get(
                "http://localhost:5000/applications"
            )

            setApplications(response.data)

        }

        catch (error) {

            console.log(error)

        }

    }

    useEffect(() => {

        fetchApplications()

    }, [])

    return (

        <div className="min-h-screen bg-[#f5f7fb]">

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* HEADER */}

                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

                    <div>

                        <h1 className="text-5xl font-extrabold text-gray-900">

                            Job Applications

                        </h1>

                        <p className="text-gray-600 mt-4 text-lg">

                            Track candidate resumes and application insights

                        </p>

                    </div>

                    <div className="bg-black text-white px-6 py-4 rounded-2xl shadow-lg font-semibold">

                        {applications.length} Applications

                    </div>

                </div>


                {/* EMPTY STATE */}

                {
                    applications.length === 0 && (

                        <div className="bg-white rounded-[35px] shadow-lg p-16 mt-16 text-center">

                            <div className="text-7xl">
                                📂
                            </div>

                            <h2 className="text-4xl font-bold text-gray-900 mt-8">

                                No Applications Yet

                            </h2>

                            <p className="text-gray-500 mt-5 text-lg">

                                Applications submitted by users will appear here.

                            </p>

                        </div>

                    )
                }


                {/* APPLICATION CARDS */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

                    {applications.map((application, index) => (

                        <motion.div
                            key={application._id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300"
                        >

                            {/* TOP */}

                            <div className="flex justify-between items-start">

                                <div>

                                    <h2 className="text-2xl font-bold text-gray-900">

                                        {application.name}

                                    </h2>

                                    <p className="text-gray-500 mt-3 text-lg break-all">

                                        {application.email}

                                    </p>

                                </div>

                                <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold">

                                    AI Screened

                                </div>

                            </div>


                            {/* DETAILS */}

                            <div className="mt-8 space-y-4">

                                <div className="flex items-center gap-3 text-gray-700">

                                    <span className="text-xl">📄</span>

                                    <span>Resume Uploaded</span>

                                </div>

                                <div className="flex items-center gap-3 text-gray-700">

                                    <span className="text-xl">⚡</span>

                                    <span>Application Verified</span>

                                </div>

                                <div className="flex items-center gap-3 text-gray-700">

                                    <span className="text-xl">🤖</span>

                                    <span>AI Candidate Analysis</span>

                                </div>

                            </div>


                            {/* ANALYTICS */}

                            <div className="bg-gray-100 rounded-2xl p-5 mt-8">

                                <div className="flex justify-between mb-3">

                                    <span className="text-gray-600">

                                        Resume Score

                                    </span>

                                    <span className="font-bold text-blue-600">

                                        92%

                                    </span>

                                </div>

                                <div className="w-full bg-gray-300 h-3 rounded-full">

                                    <div className="bg-blue-600 h-3 rounded-full w-[92%]"></div>

                                </div>

                            </div>


                            {/* BUTTON */}

                            <a
                                href={`http://localhost:5000/${application.resume}`}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-center bg-black text-white py-4 rounded-2xl mt-10 hover:bg-gray-800 transition font-semibold"
                            >

                                View Resume

                            </a>

                        </motion.div>

                    ))}

                </div>

            </div>

        </div>

    )

}

export default Applications