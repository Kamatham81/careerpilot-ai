import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import axios from "axios"

function Jobs() {

    const [jobs, setJobs] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("ALL")
    const [loading, setLoading] = useState(true)

    // APPLY MODAL
    const [showModal, setShowModal] = useState(false)
    const [selectedJob, setSelectedJob] = useState(null)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        resume: null
    })

    useEffect(() => {

        fetchJobs()

    }, [])

    async function fetchJobs() {

        try {

            const response = await axios.get(
                "https://careerpilot-ai-cwrs.onrender.com/jobs"
            )

            setJobs(response.data)

        }

        catch (error) {

            console.log(error)

        }

        finally {

            setLoading(false)

        }

    }

    async function handleSave(job) {

        try {

            await axios.post(
                "https://careerpilot-ai-cwrs.onrender.com/save-job",
                {
                    title: job.title,
                    company: job.company,
                    location: job.location,
                    salary: job.salary,
                    description: job.description
                }
            )

            alert("✅ Job Saved Successfully")

        }

        catch (error) {

            console.log(error)

        }

    }

    function openApplyModal(job) {

        setSelectedJob(job)

        setShowModal(true)

    }

    function closeModal() {

        setShowModal(false)

        setFormData({
            name: "",
            email: "",
            resume: null
        })

    }

    function handleChange(e) {

        const { name, value, files } = e.target

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })

    }

    async function handleSubmit(e) {

        e.preventDefault()

        try {

            const data = new FormData()

            data.append("userId", "12345")

            data.append("jobId", selectedJob?._id)

            data.append("name", formData.name)

            data.append("email", formData.email)

            data.append("resume", formData.resume)

            await axios.post(
                "https://careerpilot-ai-cwrs.onrender.com/apply",
                data
            )

            alert("✅ Application Submitted Successfully")

            setTimeout(() => {

                setShowModal(false)

            }, 1000)

            setFormData({
                name: "",
                email: "",
                resume: null
            })

        }

        catch (error) {

            console.log(error)

            alert("❌ Failed To Submit Application")

        }

    }

    const filteredJobs = jobs.filter((job) => {

        const matchSearch =
            job.title?.toLowerCase().includes(search.toLowerCase()) ||
            job.company?.toLowerCase().includes(search.toLowerCase())

        const matchFilter =
            filter === "ALL" ||
            job.location?.toLowerCase().includes(filter.toLowerCase())

        return matchSearch && matchFilter

    })

    if (loading) {

        return (

            <div className="min-h-screen bg-[#f5f7fb]">

                <Navbar />

                <div className="text-center mt-32">

                    <h2 className="text-3xl font-bold text-gray-800">

                        Loading AI Jobs...

                    </h2>

                    <p className="text-gray-500 mt-3">

                        Fetching personalized opportunities

                    </p>

                </div>

            </div>

        )

    }

    return (

        <div className="min-h-screen bg-[#f5f7fb]">

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}

                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

                    <div>

                        <h1 className="text-5xl font-extrabold text-gray-900">

                            Explore AI Matched Jobs

                        </h1>

                        <p className="text-gray-600 mt-4 text-lg">

                            Discover personalized opportunities powered by AI

                        </p>

                    </div>

                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-white border border-gray-200 px-5 py-4 rounded-2xl outline-none w-[300px] shadow-sm"
                    />

                </div>

                {/* FILTERS */}

                <div className="flex flex-wrap gap-4 mt-10">

                    <button
                        onClick={() => setFilter("ALL")}
                        className={`px-5 py-3 rounded-xl shadow ${
                            filter === "ALL"
                                ? "bg-black text-white"
                                : "bg-white text-gray-700"
                        }`}
                    >
                        All Jobs
                    </button>

                    <button
                        onClick={() => setFilter("remote")}
                        className={`px-5 py-3 rounded-xl shadow ${
                            filter === "remote"
                                ? "bg-black text-white"
                                : "bg-white text-gray-700"
                        }`}
                    >
                        Remote
                    </button>

                    <button
                        onClick={() => setFilter("hyderabad")}
                        className={`px-5 py-3 rounded-xl shadow ${
                            filter === "hyderabad"
                                ? "bg-black text-white"
                                : "bg-white text-gray-700"
                        }`}
                    >
                        Hyderabad
                    </button>

                    <button
                        onClick={() => setFilter("bangalore")}
                        className={`px-5 py-3 rounded-xl shadow ${
                            filter === "bangalore"
                                ? "bg-black text-white"
                                : "bg-white text-gray-700"
                        }`}
                    >
                        Bangalore
                    </button>

                </div>

                {/* JOBS */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

                    {filteredJobs.map((job, index) => {

                        const matchScore =
                            Math.floor(Math.random() * 20) + 80

                        return (

                            <motion.div
                                key={job._id || index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-[30px] shadow-lg border border-gray-100 hover:shadow-2xl transition"
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

                                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">

                                        {matchScore}% Match

                                    </div>

                                </div>

                                <div className="mt-6 space-y-3 text-gray-700">

                                    <p>📍 {job.location}</p>

                                    <p>💰 {job.salary}</p>

                                    <p>⚡ AI Recommended Role</p>

                                </div>

                                <p className="text-gray-600 mt-6 leading-7">

                                    {job.description}

                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">

                                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm">
                                        React
                                    </span>

                                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl text-sm">
                                        AI Powered
                                    </span>

                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm">
                                        Remote
                                    </span>

                                </div>

                                <div className="flex gap-4 mt-8">

                                    <button
                                        onClick={() => openApplyModal(job)}
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
                                    >

                                        Apply Now

                                    </button>

                                    <button
                                        onClick={() => handleSave(job)}
                                        className="bg-black text-white px-6 rounded-2xl hover:bg-gray-800 transition"
                                    >

                                        Save

                                    </button>

                                </div>

                            </motion.div>

                        )

                    })}

                </div>

            </div>

            {/* APPLY MODAL */}

            {showModal && (

                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">

                    <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl">

                        <div className="flex justify-between items-center mb-6">

                            <h2 className="text-3xl font-bold text-gray-900">

                                Apply Job

                            </h2>

                            <button
                                onClick={closeModal}
                                className="text-2xl text-gray-500 hover:text-black"
                            >
                                ×
                            </button>

                        </div>

                        <p className="text-gray-600 mb-6">

                            Applying for:
                            <span className="font-bold text-black">

                                {" "} {selectedJob?.title}

                            </span>

                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 rounded-2xl"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 rounded-2xl"
                            />

                            <input
                                type="file"
                                name="resume"
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 rounded-2xl"
                            />

                            <div className="flex gap-4 pt-4">

                                <button
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
                                >

                                    Submit

                                </button>

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition"
                                >

                                    Close

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>

    )

}

export default Jobs