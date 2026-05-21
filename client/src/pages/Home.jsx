import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Home() {

    const features = [

        {
            icon: "📄",
            title: "AI Resume Builder",
            desc: "Generate ATS-optimized resumes tailored to job descriptions instantly.",
        },

        {
            icon: "🎤",
            title: "Mock Interviews",
            desc: "Practice technical and HR interviews with AI-powered feedback.",
        },

        {
            icon: "🚀",
            title: "Smart Job Matching",
            desc: "Get personalized job recommendations based on your skills.",
        },

        {
            icon: "📊",
            title: "Career Analytics",
            desc: "Track resume score, interview performance, and growth.",
        },

    ]

    const jobs = [

        {
            title: "Frontend Developer",
            match: "92%",
            color: "green",
            desc: "React • Tailwind • UI/UX focused startup role",
            salary: "₹8–15 LPA",
        },

        {
            title: "Full Stack Engineer",
            match: "87%",
            color: "blue",
            desc: "Node.js • MongoDB • AI SaaS company",
            salary: "₹12–25 LPA",
        },

        {
            title: "AI Product Intern",
            match: "81%",
            color: "purple",
            desc: "Work on AI workflows and product systems",
            salary: "₹5–10 LPA",
        },

    ]

    return (

        <div className="min-h-screen bg-[#f5f7fb] overflow-hidden">

            <Navbar />

            {/* HERO SECTION */}

            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">

                            AI Powered Career Platform

                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">

                            Build Your Future With

                            <span className="text-blue-600">

                                {" "}CareerPilot AI

                            </span>

                        </h1>

                        <p className="mt-8 text-lg text-gray-600 leading-9 max-w-2xl">

                            Discover jobs, create ATS-ready resumes,
                            practice interviews, and accelerate your
                            career using powerful AI tools.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 mt-10">

                            <Link
                                to="/jobs"
                                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg text-center"
                            >

                                Explore Jobs

                            </Link>

                            <Link
                                to="/register"
                                className="bg-white border border-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition duration-300 text-center"
                            >

                                Get Started

                            </Link>

                        </div>

                    </motion.div>


                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        <div className="bg-white rounded-[35px] shadow-2xl p-8 border border-gray-100">

                            <div className="flex justify-between items-center mb-8">

                                <div>

                                    <h2 className="text-2xl font-bold text-gray-900">

                                        AI Career Dashboard

                                    </h2>

                                    <p className="text-gray-500 mt-2">

                                        Personalized insights

                                    </p>

                                </div>

                                <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl font-bold">

                                    94%

                                </div>

                            </div>

                            <div className="space-y-5">

                                <div className="bg-gray-100 p-5 rounded-2xl">

                                    <div className="flex justify-between">

                                        <span className="font-semibold text-gray-700">

                                            Resume Score

                                        </span>

                                        <span className="text-green-600 font-bold">

                                            92%

                                        </span>

                                    </div>

                                    <div className="w-full bg-gray-300 h-3 rounded-full mt-3">

                                        <div className="bg-green-500 h-3 rounded-full w-[92%]"></div>

                                    </div>

                                </div>

                                <div className="bg-gray-100 p-5 rounded-2xl">

                                    <div className="flex justify-between">

                                        <span className="font-semibold text-gray-700">

                                            Interview Readiness

                                        </span>

                                        <span className="text-blue-600 font-bold">

                                            88%

                                        </span>

                                    </div>

                                    <div className="w-full bg-gray-300 h-3 rounded-full mt-3">

                                        <div className="bg-blue-500 h-3 rounded-full w-[88%]"></div>

                                    </div>

                                </div>

                                <div className="bg-gray-100 p-5 rounded-2xl">

                                    <div className="flex justify-between">

                                        <span className="font-semibold text-gray-700">

                                            Skill Match

                                        </span>

                                        <span className="text-purple-600 font-bold">

                                            81%

                                        </span>

                                    </div>

                                    <div className="w-full bg-gray-300 h-3 rounded-full mt-3">

                                        <div className="bg-purple-500 h-3 rounded-full w-[81%]"></div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* JOBS */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="text-center">

                    <h2 className="text-5xl font-bold text-gray-900">

                        AI Job Recommendations

                    </h2>

                    <p className="text-gray-600 mt-5 text-lg">

                        Personalized opportunities matched to your profile

                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {jobs.map((job, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[30px] shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300"
                        >

                            <div className="flex justify-between items-center">

                                <h3 className="text-2xl font-bold text-gray-900">

                                    {job.title}

                                </h3>

                                <div
                                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                                        job.color === "green"
                                            ? "bg-green-100 text-green-600"
                                            : job.color === "blue"
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-purple-100 text-purple-600"
                                    }`}
                                >

                                    {job.match}

                                </div>

                            </div>

                            <p className="text-gray-600 mt-5 leading-8">

                                {job.desc}

                            </p>

                            <div className="flex gap-3 flex-wrap mt-7">

                                <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm">

                                    Remote

                                </span>

                                <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm">

                                    Full Time

                                </span>

                                <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm">

                                    {job.salary}

                                </span>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>


            {/* FEATURES */}

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center">

                    <h2 className="text-5xl font-bold text-gray-900">

                        AI Career Ecosystem

                    </h2>

                    <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto leading-8">

                        Everything you need to build your dream career
                        in one intelligent AI platform.

                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10 mt-20">

                    {features.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-10 rounded-[35px] shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300"
                        >

                            <div className="text-5xl">

                                {item.icon}

                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mt-6">

                                {item.title}

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8 text-lg">

                                {item.desc}

                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium">

                                    AI Powered

                                </span>

                                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">

                                    Smart Analytics

                                </span>

                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-medium">

                                    Real Time

                                </span>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>


            {/* FOOTER */}

            <footer className="bg-black text-white mt-24">

                <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

                    <div>

                        <h2 className="text-3xl font-bold">

                            CareerPilot AI

                        </h2>

                        <p className="text-gray-400 mt-6 leading-8">

                            AI-powered career platform helping students
                            and professionals grow faster.

                        </p>

                    </div>

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">

                            Quick Links

                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400">

                            <Link to="/jobs" className="hover:text-white">

                                Explore Jobs

                            </Link>

                            <Link to="/dashboard" className="hover:text-white">

                                Dashboard

                            </Link>

                            <Link to="/profile" className="hover:text-white">

                                Profile

                            </Link>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-2xl font-semibold mb-6">

                            Features

                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400">

                            <p>AI Resume Builder</p>

                            <p>Mock Interviews</p>

                            <p>Smart Job Matching</p>

                            <p>Career Analytics</p>

                        </div>

                    </div>

                </div>

                <div className="border-t border-gray-800 py-6 text-center text-gray-500">

                    © 2026 CareerPilot AI. All rights reserved.

                </div>

            </footer>

        </div>

    )

}

export default Home