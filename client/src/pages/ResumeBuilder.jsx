import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import jsPDF from "jspdf";

function ResumeBuilder() {

  const [form, setForm] = useState({
    name: "",
    role: "",
    skills: "",
    linkedin: "",
    github: "",
    education: "",
    projects: "",
    experience: "",
    certifications: "",
    achievements: ""
  });

  const [loading, setLoading] = useState(false);

  const [resume, setResume] = useState(null);

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  async function generateResume() {

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/resume/generate",
        form
      );

      setResume(res.data);

    }

    catch (err) {

      console.log(err);

    }

    finally {

      setLoading(false);

    }

  }

  // DOWNLOAD PDF

  function downloadPDF() {

    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);

    doc.text("AI Generated Resume", 20, y);

    y += 15;

    doc.setFontSize(12);

    const lines = [

      `Name: ${form.name}`,

      `Role: ${form.role}`,

      `Skills: ${form.skills}`,

      `Experience: ${form.experience}`,

      `Education: ${form.education}`,

      `Projects: ${form.projects}`,

      `Certifications: ${form.certifications}`,

      `Achievements: ${form.achievements}`,

      `LinkedIn: ${form.linkedin}`,

      `GitHub: ${form.github}`

    ];

    lines.forEach((line) => {

      const splitText = doc.splitTextToSize(
        line,
        170
      );

      doc.text(splitText, 20, y);

      y += splitText.length * 8;

    });

    doc.save("AI_Resume.pdf");

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">

        {/* CARD */}

        <div className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-[35px] p-10 shadow-2xl">

          {/* TITLE */}

          <h1 className="text-5xl font-extrabold text-gray-900">

            AI Resume Builder

          </h1>

          <p className="text-gray-600 mt-4 text-lg">

            Generate ATS optimized resumes instantly

          </p>

          {/* FORM */}

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <input
              type="text"
              name="role"
              placeholder="Target Role"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn URL"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <input
              type="text"
              name="github"
              placeholder="GitHub URL"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

          </div>

          <div className="space-y-5 mt-5">

            <textarea
              name="skills"
              placeholder="Skills (comma separated)"
              rows="3"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <textarea
              name="experience"
              placeholder="Experience"
              rows="4"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <textarea
              name="education"
              placeholder="Education"
              rows="3"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <textarea
              name="projects"
              placeholder="Projects"
              rows="4"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <textarea
              name="certifications"
              placeholder="Certifications"
              rows="3"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

            <textarea
              name="achievements"
              placeholder="Achievements"
              rows="3"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
            />

          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={generateResume}
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >

              {loading
                ? "Generating..."
                : "Generate Resume"}

            </button>

            <button
              onClick={downloadPDF}
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition"
            >

              Download Resume PDF

            </button>

          </div>

          {/* RESULT */}

          {resume && (

            <div className="mt-12 bg-white p-8 rounded-3xl shadow-lg">

              <h2 className="text-3xl font-bold text-gray-900">

                Generated Resume

              </h2>

              <p className="mt-6">
                <b>Headline:</b> {resume.headline}
              </p>

              <p className="mt-4">
                <b>Summary:</b> {resume.summary}
              </p>

              <div className="mt-5">

                <h3 className="text-xl font-bold">
                  Skills
                </h3>

                <ul className="list-disc ml-6 mt-3">

                  {resume.skills?.map((skill, index) => (

                    <li key={index}>
                      {skill}
                    </li>

                  ))}

                </ul>

              </div>

              <p className="mt-5">
                <b>Experience:</b> {resume.experience}
              </p>

              <p className="mt-5">
                <b>Education:</b> {resume.education}
              </p>

              <p className="mt-5">
                <b>Projects:</b> {resume.projects}
              </p>

              <p className="mt-5">
                <b>Certifications:</b> {resume.certifications}
              </p>

              <p className="mt-5">
                <b>Achievements:</b> {resume.achievements}
              </p>

              <p className="mt-5">
                <b>LinkedIn:</b> {resume.linkedin}
              </p>

              <p className="mt-5">
                <b>GitHub:</b> {resume.github}
              </p>

              <p className="mt-6 text-2xl font-bold text-green-600">

                ATS Score: {resume.atsScore}%

              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default ResumeBuilder;