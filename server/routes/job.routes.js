import express from "express";
import { matchJobs } from "../services/jobMatch.service.js";

const router = express.Router();

router.post("/match", (req, res) => {
  const { user, jobs } = req.body;

  const results = matchJobs(user, jobs);

  res.json(results);
});

export default router;