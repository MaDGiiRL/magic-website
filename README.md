# Purple Magic ✦

Landing page editoriale ispirata al template fornito, ricostruita con **React 19, Vite 7 e Tailwind CSS 4**.

## Avvio

```bash
npm install
npm run dev
```

Apri l'indirizzo locale mostrato da Vite (normalmente http://localhost:5173).

## Build di produzione

```bash
npm run build
npm run preview
```

## Personalizzazione

- `src/App.jsx`: contenuti, categorie, news e link delle immagini (oggetto `img` in cima al file).
- `src/index.css`: palette, tipografia, responsive e animazioni. Tailwind 4 è attivato con `@import "tailwindcss"`.
- `index.html`: titolo, descrizione e font Google.

Le fotografie sono caricate tramite URL pubblici di Unsplash e richiedono Internet. Puoi scaricare immagini tue in `public/images/` e sostituire gli URL nell'oggetto `img`.

### Nota sul modulo newsletter

Il form mostra un messaggio dimostrativo in locale, **non salva le email**. Per renderlo operativo collegalo a un servizio newsletter o a un tuo endpoint API.

### Cosa funziona

Navigazione con ancore, menu mobile, modal delle 4 categorie, carosello editoriale, validazione front-end dell'email, layout responsive e supporto `prefers-reduced-motion`.
