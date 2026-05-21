import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"

function Applications() {

    const [applications, setApplications] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchApplications()

    }, [])

    async function fetchApplications() {

        try {

            const res = await axios.get(
                "http://localhost:5000/applications"
            )

            setApplications(res.data)

        }

        catch (err) {

            console.log(err)

        }

        finally {

            setLoading(false)

        }

    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-12">

                <h1 className="text-5xl font-extrabold text-gray-900">

                    My Applications

                </h1>

                <p className="text-gray-600 mt-4 text-lg">

                    Track all your submitted applications

                </p>

                {loading ? (

                    <div className="mt-10 text-2xl font-bold text-blue-600">

                        Loading Applications...

                    </div>

                ) : applications.length === 0 ? (

                    <div className="mt-10 bg-white p-10 rounded-3xl shadow">

                        <h2 className="text-2xl font-bold text-gray-700">

                            No Applications Found

                        </h2>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 gap-8 mt-12">

                        {applications.map((app, index) => (

                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
                            >

                                <div className="flex justify-between items-start">

                                    <div>

                                        <h2 className="text-2xl font-bold text-gray-900">

                                            {app.name}

                                        </h2>

                                        <p className="text-gray-500 mt-2">

                                            {app.email}

                                        </p>

                                    </div>

                                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">

                                        Applied

                                    </div>

                                </div>

                                <div className="mt-6 space-y-3">

                                    <p className="text-gray-700">

                                        <b>Job ID:</b> {app.jobId}

                                    </p>

                                    <p className="text-gray-700">

                                        <b>User ID:</b> {app.userId}

                                    </p>

                                </div>

                                <div className="mt-8 flex gap-4">

                                    <a
                                        href={`http://localhost:5000/${app.resume}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
                                    >

                                        View Resume

                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    )

}

export default Applications