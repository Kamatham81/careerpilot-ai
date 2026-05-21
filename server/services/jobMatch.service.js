export function matchJobs(user, jobs) {
  return jobs.map(job => {
    const skills = user.skills.toLowerCase().split(",");

    let score = 0;

    skills.forEach(skill => {
      if (job.description.toLowerCase().includes(skill.trim())) {
        score += 10;
      }
    });

    const finalScore = Math.min(100, score + 30);

    return {
      job,
      matchScore: finalScore,
      reason: "Based on skill + experience match"
    };
  });
}