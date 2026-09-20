RCHID SALAH EDDINE ARCHITECTE — Version Vercel

Structure:
- index.html
- styles.css
- app.js
- api/portfolio.js  -> Vercel Serverless Function
- vercel.json
- package.json

Variables d'environnement à ajouter dans Vercel:
- AIRTABLE_TOKEN = votre token Airtable (secret)
- AIRTABLE_BASE_ID = appV1TN3h1EwTr3Za (optionnel, valeur par défaut intégrée)
- AIRTABLE_PORTFOLIO_TABLE_ID = tblmZxhXNvsMEzEl6 (optionnel, valeur par défaut intégrée)

Le site appelle /api/portfolio. Seuls les projets dont le champ "Publié" est coché sont renvoyés au site public.
Ne jamais mettre AIRTABLE_TOKEN dans app.js, index.html ou un dépôt public.
