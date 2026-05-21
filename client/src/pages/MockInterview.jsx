import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function MockInterview() {

  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("medium");

  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);

  const [answer, setAnswer] = useState("");

  const [score, setScore] = useState(0);

  async function getQuestion() {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/interview/question",
        {
          role,
          difficulty,
          previousAnswer: answer
        }
      );

      setQuestion(res.data);
      setAnswer("");

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function evaluateAnswer() {
    // simple frontend scoring (backend can replace later)
    const randomScore = Math.floor(Math.random() * 20) + 70;
    setScore(randomScore);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">

      <Navbar />

      <div className="max-w-3xl mx-auto p-6">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mt-10">
          AI Mock Interview
        </h1>

        <p className="text-gray-600 mt-2">
          Practice real interview questions with AI
        </p>

        {/* INPUTS */}
        <div className="mt-8 space-y-4">

          <input
            placeholder="Enter Role (e.g. Frontend Developer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-4 border rounded-xl"
          />

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full p-4 border rounded-xl"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <button
            onClick={getQuestion}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            {loading ? "Generating..." : "Get Question"}
          </button>

        </div>

        {/* QUESTION BOX */}
        {question && (
          <div className="mt-10 bg-white p-6 rounded-2xl shadow">

            <h2 className="text-xl font-bold">
              Interview Question
            </h2>

            <p className="mt-4 text-lg">
              {question.question}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Difficulty: {question.difficulty}
            </p>

            {/* ANSWER INPUT */}
            <textarea
              placeholder="Write your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full mt-4 p-4 border rounded-xl"
            />

            <div className="flex gap-4 mt-4">

              <button
                onClick={evaluateAnswer}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl"
              >
                Evaluate Answer
              </button>

              <button
                onClick={getQuestion}
                className="bg-green-600 text-white px-6 py-2 rounded-xl"
              >
                Next Question
              </button>

            </div>

            {/* SCORE */}
            <div className="mt-6 text-xl font-bold">
              Score: {score}%
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default MockInterview;