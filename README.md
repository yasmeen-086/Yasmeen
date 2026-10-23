# Yasmeen: Portfolio (Next.js)

## Run locally
    npm install
    npm run dev      # http://localhost:3000

## Deploy on Vercel
Push this folder to GitHub, import it at vercel.com/new (framework: Next.js, defaults), Deploy.

## Structure
- `app/layout.tsx`: metadata, fonts, social tags
- `app/page.tsx`: renders the page markup and loads the interactions script
- `app/globals.css`: all styling (light and dark themes)
- `lib/body.html`: page markup
- `public/portfolio.js`: project data (the `P` array), dotted name, robots, cursor, theme and Recruiter view
- `public/Yasmeen_Resume.pdf`: resume linked from the site
