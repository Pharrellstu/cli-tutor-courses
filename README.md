# cli-tutor courses

Free, community-made courses for [cli-tutor](https://github.com/Pharrellstu/cli-tutor) —
learn a language by building a real project, gated by real tests.

## Use these courses

You don't need this repo directly. In the cli-tutor app, open **Library**
and click **Install** — no coding agent or tokens required.

## What's here

- `courses/<id>/` — one folder per course, in the standard cli-tutor course
  format (`course.json`, `setup.md`, `modules/`, `workspace/`, `.tests/`).
- `index.json` — the catalog the app reads. **Auto-generated** by
  `scripts/build-index.mjs` on every push to `main`; never edit it by hand.

## Contribute a course

Generate a course with cli-tutor, then open a pull request adding it under
`courses/<your-course-id>/`. See [CONTRIBUTING.md](CONTRIBUTING.md).
Every PR is validated in CI with `cli-tutor validate`.
