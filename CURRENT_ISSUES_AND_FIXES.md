# CURRENT_ISSUES_AND_FIXES.md  
_Actionable checklist to finish the simple one-page portfolio_  
_Last scan : 2025-05-31_

Legend 🔴 High 🟠 Medium 🟢 Low  

| # | Priority | Files / Path | Issue | Fix |
|---|----------|--------------|-------|-----|
| 1 | 🔴 | `frontend/src/App.js`, `frontend/src/components/*.jsx` | Components in plain JS/JSX; project standard is **TypeScript (`.tsx`)** | Rename each file to `.tsx`, add typed prop interfaces, and switch to **named exports** (`export const Header`). |
| 2 | 🔴 | `frontend/eslint.config.js` | ESLint ignores `.ts/.tsx`; no TS parser | `yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-tailwindcss` → update config: include `**/*.{js,jsx,ts,tsx}`; set `parser:'@typescript-eslint/parser'`. |
| 3 | 🔴 | `tailwind.config.js` & `src/styles/global.css` | 8-px spacing scale + CSS vars missing | Extend `theme.spacing` with keys `0,2,4,6,8,12,16,24`. In `global.css` add:<br>`--space-component: clamp(16px,3vw,24px);`<br>`--space-section: clamp(40px,6vw,64px);` |
| 4 | 🔴 | Buttons / FAB (e.g. `FloatingActionButton.jsx`) | Tap target smaller than 44 px | Add `min-w-[44px] min-h-[44px]` classes or wrap with shared `Button` component. |
| 5 | 🟠 | Focus styles inconsistent | Some interactive elements lack visible focus | Create `.focus-ring` utility in `global.css` and apply to all `<button>` / `<a>` elements. |
| 6 | 🟠 | Build script for GH Pages absent | Manual deploy error-prone | `yarn add -D gh-pages`; in root `package.json` add scripts:<br>`\"predeploy\":\"yarn --cwd frontend build\",`<br>`\"deploy\":\"gh-pages -d frontend/dist -b gh-pages\"` |
| 6.1 | ✅ | Root workspace setup | Root workspace/package.json created | Added workspace configuration with frontend as workspace and deployment scripts |
| 7 | 🟢 | README still references Docker/backend | Outdated info | Remove backend/Docker sections once above issues resolved. |

---

## Verification

```bash
# Lint & type check
cd frontend
yarn lint && yarn tsc --noEmit

# Build
yarn build            # output in frontend/dist

# Manual deploy test (renders under file protocol)
npx serve dist
```

---

### Completion Definition

All 🔴 items complete and site loads correctly from `dist/` with:

* No console errors
* Correct spacing via CSS vars
* Buttons ≥ 44 × 44 px & visible focus ring
* GitHub Pages branch `gh-pages` serving latest build at `https://nathandryer.com`

Mark each row ✅ in PR descriptions when finished.  

✅ Dev-tooling bootstrap
