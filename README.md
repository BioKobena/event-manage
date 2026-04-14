# Concert Management App Mockups

This repository contains the frontend code for the Concert Management App Mockups.
The original design is available at:
https://www.figma.com/design/b703QPIzmdg20okihi332L/Concert-Management-App-Mockups

## Branche

- Travail principal sur la branche `frontend`

## Prérequis

- Node.js installé (version 18+ recommandée)
- npm disponible

## Installation

1. Depuis la racine du projet :
   ```bash
   git checkout frontend
   npm install
   ```

2. Si le lancement échoue avec une erreur `lightningcss` sur Windows :
   ```bash
   npm install lightningcss-win32-x64-msvc
   npm rebuild lightningcss
   ```

## Démarrage du projet

Lancer le serveur de développement :
```bash
npm run dev -- --host 0.0.0.0
```

Puis ouvrir le navigateur sur :

- `http://localhost:5173/`

## Notes

- `package-lock.json` est généré et suivi pour garantir des installations reproductibles.
- Si vous utilisez un autre système, type Linux/macOS, la commande `npm install` devrait suffire.
  