# Purple Magic · Esoteric Blog

Blog esoterico responsive in **React 19 + Vite 7 + Tailwind CSS 4 + React Router 7**. Estetica dark fantasy in palette lilla.

## Come avviarlo

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato da Vite (normalmente `http://localhost:5173`).

## Build di produzione

```bash
npm run build
npm run preview
```

## Routing

- `/` Home
- `/blog` Archivio articoli con ricerca e filtri via query string
- `/blog/:slug` Articoli completi
- `/incantesimi` Archivio rituali con filtri
- `/incantesimi/:slug` Scheda rituale con materiali e passaggi
- `/contatti` Modulo contatti via `mailto:`
- Qualsiasi altro percorso: pagina 404

I dati dimostrativi degli articoli e degli incantesimi sono in `src/App.jsx`, negli array `posts` e `spells`. Per aggiungere contenuti, inserire nuovi oggetti con slug univoco.

**Contatti:** modifica l'indirizzo `info@sofiavidotto.dev` nel componente `Contact` se non corrisponde alla tua casella effettiva. Attualmente il modulo apre il client email, senza backend e senza memorizzare dati.

**Link portfolio nel footer:** https://sofiavidotto.dev/ (Designed & Developed by Sofia Vidotto).

Le fotografie vengono da URL Unsplash; per un sito definitivo, valuta immagini locali ottimizzate e licenze appropriate.

Per deploy SPA con BrowserRouter serve un rewrite delle URL verso `index.html`; su Vercel è incluso `vercel.json`, su Netlify `_redirects` nella cartella `public`.
