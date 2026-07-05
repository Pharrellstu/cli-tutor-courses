#!/usr/bin/env node
// Regenerates index.json from courses/*/course.json. Never edit index.json by
// hand — CI runs this on every push to main.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const coursesDir = path.join(root, "courses");
const repo = process.env.GITHUB_REPOSITORY ?? "Pharrellstu/cli-tutor-courses";
const branch = process.env.GITHUB_REF_NAME ?? "main";

const courses = [];
for (const dir of fs.readdirSync(coursesDir).sort()) {
  const manifestFile = path.join(coursesDir, dir, "course.json");
  if (!fs.existsSync(manifestFile)) continue;
  const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
  let stepsTotal = 0;
  for (const m of manifest.modules) {
    const mod = JSON.parse(
      fs.readFileSync(path.join(coursesDir, dir, "modules", m, "module.json"), "utf8"),
    );
    stepsTotal += mod.steps.length;
  }
  courses.push({
    id: manifest.id,
    title: manifest.title,
    language: manifest.language,
    level: manifest.level,
    description: manifest.description,
    projectGoal: manifest.projectGoal,
    stepsTotal,
    ...(manifest.source ? { source: manifest.source } : {}),
  });
}

const index = {
  formatVersion: 1,
  generatedAt: new Date().toISOString(),
  tarball: `https://codeload.github.com/${repo}/tar.gz/refs/heads/${branch}`,
  courses,
};
fs.writeFileSync(path.join(root, "index.json"), JSON.stringify(index, null, 2) + "\n", "utf8");
console.log(`index.json: ${courses.length} course(s)`);
