# Nathan Dryer - Personal Portfolio

React portfolio site.

**Live Site:** [https://nathandryer.com](https://nathandryer.com)

## Tech

React | TypeScript | Tailwind CSS | Framer Motion | Jest | Playwright | Yarn

## Run Locally

1. `git clone https://github.com/your-username/your-repo-name.git`
2. `cd your-repo-name && yarn install`
3. `yarn start` (localhost:3000)

**Tests:** `yarn test`, `yarn playwright test`

> Note: This project uses Yarn (v1). Please do not commit `package-lock.json`. Use `yarn` for all install and script commands.

## Deploy (GitHub Pages)

Uses `gh-pages`.

1. **Setup:** `yarn add -D gh-pages`, update `package.json` (`homepage` & deploy scripts).
2. **Deploy:** `yarn deploy`

## Content Schema (Skills & Timeline)

- Skills are grouped into categories: Languages & Runtimes; Frameworks & Libraries; AI/ML & Tooling; Infra & DevOps; Design & UX. Each skill has a depth badge: Expert/Proficient/Familiar (legacy Advanced -> Proficient, Intermediate -> Familiar).
- Timeline entries standardize: role (`title`), `company`, `date`, succinct achievements and technologies.

Update guidelines are documented in `src/components/Skills/README.md` and `src/components/Timeline/README.md`.
