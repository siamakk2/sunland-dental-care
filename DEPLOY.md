# Deploying this update

This replaces the current `sunland-dental-care` Vercel deployment entirely (same stack: Next.js 15 static + Tailwind 4).

## Option A — drag & drop (fastest)
1. Unzip this folder.
2. In a terminal inside the folder: `npx vercel --prod` (log in as siamakk2 when prompted, link to the existing `sunland-dental-care` project).

## Option B — GitHub (recommended, closes open item #1)
1. Unzip, then: `git init && git add -A && git commit -m "Photos, Dr. Emami page, AI authority layer"`
2. Push to a new GitHub repo.
3. Vercel → sunland-dental-care → Settings → Git → connect the repo. Auto-deploys from then on.

## What changed in this version
- Real photos: soft hero of Dr. Emami on the homepage; portrait + office gallery
- New page: /dr-emami (full profile, ProfilePage schema)
- Person schema now linked to her real U.S. News, Healthgrades, and WebMD profiles (sameAs)
- Practice schema linked to Yelp + Facebook (open item #3 → done)
- "Clinically reviewed by Dr. Emami" bylines on service pages (E-E-A-T)
- robots.txt now explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.
- Expanded /llms.txt fact sheet incl. independent profile links
- All content still driven by lib/practice.js — edit once, updates everywhere
