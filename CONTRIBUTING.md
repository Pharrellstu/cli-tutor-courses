# Contributing a course

1. Generate a course with cli-tutor (or write one by hand in the same format).
2. Clean it up before submitting:
   - delete `progress.json` (your personal progress),
   - reset `workspace/` to the starter files (a learner must start from
     scratch — never ship solutions in `workspace/` or lesson text),
   - remove `node_modules/`, `.git/`, editor junk.
3. Copy the folder into `courses/<course-id>/`. The folder name must equal
   the `id` in `course.json` (lowercase letters, digits, dashes).
4. Check it passes validation: `npx cli-tutor validate courses/<course-id>`
   (or let CI do it on your PR).
5. Open a pull request. Don't touch `index.json` — CI regenerates it.

## Ground rules

- Lesson text (`step.md`) must never contain the finished solution.
  Teach the concept; let the tests and hints guide the learner.
- Courses adapted from existing tutorials must credit the original in
  `course.json`'s `source` field and respect its license.
- Keep test commands offline and dependency-light where possible.
