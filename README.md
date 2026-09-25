# Rawan Magdy Ahmed — Portfolio

Frontend engineer portfolio. Next.js, TypeScript, Tailwind.

**Repo:** https://github.com/RawanMagdyAhmed/portfolio

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

Import **https://github.com/RawanMagdyAhmed/portfolio** in Vercel.

This matches the config that worked on the previous repo (`output: "export"` → `out/`).

**In Vercel → Project Settings → Build & Development Settings, set exactly:**

- Framework Preset: **Other** (important — not Next.js; Next.js looks for `routes-manifest.json` inside `out` and fails)
- Build Command: `npm run build`
- Output Directory: `out`
- Install Command: `npm install`
- Root Directory: empty

Save, then Redeploy with **Use existing Build Cache** turned off.
