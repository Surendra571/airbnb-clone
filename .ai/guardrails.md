# AI Engineering Guardrails & Integrity Policy

> **Scope:** Mandatory rules governing all AI assistants, sub-agents, and automated workflows on the `airbnb-clone` repository.

---

## 1. Absolute Originality & Intellectual Property Rules

1. **Never Copy Reference Source Code:**
   Under no circumstances may the assistant scrape, download, decompile, or lift source code, React components, CSS files, or JavaScript bundles from the reference site (`https://airbnb-clone-umber-two.vercel.app` or its mirrors).
2. **Never Inspect Hidden Implementation Details:**
   Do not inspect bundle internals, webpack manifests, internal framework state, or obfuscated symbols.
3. **Use Rendered UI as the Sole Truth:**
   The reference application must be studied exclusively through its rendered DOM, visual layouts, computed measurements, and interactive behaviors in a standard browser.
4. **Independent Authoring:**
   All components, layout hierarchies, TypeScript definitions, styling rules, and hooks must be created independently from first principles.

---

## 2. Engineering & Architectural Guardrails

1. **Desktop-Only Scope:**
   Maintain focus strictly on the desktop experience (`1120px` max-width content container, `1440 × 900` reference viewport). Do not divert effort into mobile menus or native application shells.
2. **Zero Dependency Bloat:**
   Do not add external state management libraries (Redux, MobX, Zustand), icon libraries with heavy runtimes, or unneeded animation packages. Rely on React 19 primitives, Next.js App Router query synchronization, and native CSS/Tailwind utilities.
3. **Preserve Accessibility:**
   Every modal must have accessible dialog semantics (`role="dialog"`, `aria-modal="true"`, descriptive `aria-label`). All interactive triggers must be accessible buttons (`<button type="button">`) with visible focus outlines (`:focus-visible`).
4. **No Undocumented Behavior:**
   Do not invent arbitrary features (e.g. backend authentication flows, live credit card processing, custom rating review submission forms) not present in the reference specification.

---

## 3. Verification & Truthfulness Guardrails

1. **Verify Visual Changes with Screenshots:**
   Every visual polish iteration must be verified via actual rendered viewport screenshots at `1440 × 900` with 100% zoom before declaring task completion.
2. **Mandatory Build & Lint Validation:**
   Run `npm run lint`, `npm run build`, and `npm test` after each significant change. Never bypass or suppress type errors with `any` casts or `@ts-ignore`.
3. **Honest Reporting:**
   Never claim tests were executed, tools were run, or builds passed unless the exact command was run in the environment and exited with code 0.
4. **No Credential Leaks:**
   Never log, store, or commit API keys, secrets, session cookies, or personal identifying tokens.

