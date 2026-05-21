import Navbar from "../components/Navbar"

import { useEffect, useState } from "react"

import axios from "axios"

function Admin() {

    const [title, setTitle] = useState("")

    const [company, setCompany] = useState("")

    const [location, setLocation] = useState("")

    const [salary, setSalary] = useState("")

    const [description, setDescription] = useState("")

    const [jobs, setJobs] = useState([])


    async function fetchJobs() {

        try {

            const response = await axios.get(

                "https://careerpilot-ai-cwrs.onrender.com/jobs"

            )

            setJobs(response.data)

        }

        catch(error) {

            console.log(error)

        }

    }


    async function handleAddJob() {

        try {

            await axios.post(

                "https://careerpilot-ai-cwrs.onrender.com/add-job",

                {
                    title,
                    company,
                    location,
                    salary,
                    description
                }

            )

            alert("Job Added Successfully")

            fetchJobs()

            setTitle("")

            setCompany("")

            setLocation("")

            setSalary("")

            setDescription("")

        }

        catch(error) {

            console.log(error)

        }

    }


    async function handleDelete(id) {

        try {

            await axios.delete(

                `https://careerpilot-ai-cwrs.onrender.com/delete-job/${id}`

            )

            alert("Job Deleted Successfully")

            fetchJobs()

        }

        catch(error) {

            console.log(error)

        }

    }


    useEffect(() => {

        fetchJobs()

    }, [])


    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* HEADER */}

                <div className="flex flex-col md:flex-row justify-between items-center gap-5">

                    <div>

                        <h1 className="text-5xl font-extrabold text-gray-900">

                            Admin Dashboard

                        </h1>

                        <p className="text-gray-600 mt-3 text-lg">

                            Manage jobs and platform postings
                        </p>

                    </div>


                    <div className="bg-white shadow-lg px-6 py-4 rounded-2xl">

                        <h2 className="text-3xl font-bold text-blue-600">

                            {jobs.length}

                        </h2>

                        <p className="text-gray-500 mt-1">

                            Total Jobs
                        </p>

                    </div>

                </div>


                {/* ADD JOB FORM */}

                <div className="bg-white p-10 rounded-3xl shadow-xl mt-12">

                    <h2 className="text-3xl font-bold text-gray-900 mb-8">

                        Add New Job

                    </h2>


                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            type="text"
                            placeholder="Job Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="text"
                            placeholder="Company Name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="text"
                            placeholder="Salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>


                    <textarea
                        placeholder="Job Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 w-full mt-6 h-36 resize-none"
                    />


                    <button
                        onClick={handleAddJob}
                        className="mt-8 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition duration-300"
                    >

                        Add Job

                    </button>

                </div>


                {/* JOB LIST */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {jobs.map((job) => (

                        <div
                            key={job._id}
                            className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >

                            <div className="flex justify-between items-start">

                                <div>

                                    <h2 className="text-2xl font-bold text-gray-900">

                                        {job.title}

                                    </h2>

                                    <p className="text-gray-500 mt-2">

                                        {job.company}

                                    </p>

                                </div>

                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">

                                    Active

                                </span>

                            </div>


                            <div className="mt-6 space-y-3">

                                <p className="text-gray-700">

                                    📍 {job.location}

                                </p>

                                <p className="text-green-600 font-bold">

                                    💰 {job.salary}

                                </p>

                                <p className="text-gray-500 leading-7">

                                    {job.description}

                                </p>

                            </div>


                            <button
                                onClick={() => handleDelete(job._id)}
                                className="mt-8 bg-red-500 text-white w-full py-3 rounded-2xl hover:bg-red-600 transition duration-300"
                            >

                                Delete Job

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )

}

export default Admin