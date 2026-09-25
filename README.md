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

This site is a **static export** (`out/`). In Project Settings → Build & Development Settings:

- Framework Preset: **Other** (not Next.js)
- Build Command: `next build` (or leave default from `vercel.json`)
- Output Directory: **`out`**
- Install Command: `npm install`
- Root Directory: leave empty

Then Redeploy with **Use existing Build Cache** turned off.
