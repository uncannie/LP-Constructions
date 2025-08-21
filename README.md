# LP Constructions – React (Vite + Tailwind)

Multi-page marketing site aligned to licence scope (≤ 3 storeys).

## Pages
- `/` Home
- `/services`
- `/projects`
- `/compliance`
- `/contact`

## Local setup
1. Install Node.js 18+
2. `npm install`
3. `npm run dev`

## Deploy (Vercel via GitHub)
1. Create a new GitHub repo and push this folder.
2. In Vercel dashboard: **Add New → Project → Import Git Repository** and select your repo.
3. Use defaults (Framework: Vite). Deploy.
4. Add your custom domain in Vercel (Settings → Domains).

## Notes
- Brand colours are set in `tailwind.config.js` (brand navy `#0A2540` with a lighter accent).
- Replace `/src/assets/logo.svg` with your official logo when available.
- Update ABN/Licence in `src/pages/Compliance.jsx`, `src/components/Footer.jsx`, and `src/pages/Contact.jsx`.
