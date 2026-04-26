# Concert Manager - Frontend Angular

Ce projet est une application frontend Angular pour la gestion de concerts, développée avec Angular 21 et utilisant Server-Side Rendering (SSR).

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :
- Node.js (version 18 ou supérieure)
- npm (inclus avec Node.js)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/BioKobena/event-manage.git
   cd event-manage
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancement du projet

### Mode développement
Pour lancer l'application en mode développement avec rechargement automatique :
```bash
npm start
```
ou
```bash
ng serve
```

L'application sera accessible sur `http://localhost:4200/`.

### Mode production
Pour construire l'application pour la production :
```bash
npm run build
```

Les fichiers de build seront générés dans le dossier `dist/`.

### Serveur SSR
Pour lancer le serveur avec Server-Side Rendering :
```bash
npm run serve:ssr:concert-manager
```

## Scripts disponibles

- `npm start` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run watch` : Construit en mode watch pour le développement
- `npm test` : Lance les tests unitaires
- `npm run serve:ssr:concert-manager` : Lance le serveur SSR

## Structure du projet

- `src/` : Code source de l'application
- `public/` : Assets statiques
- `angular.json` : Configuration Angular CLI
- `tsconfig.json` : Configuration TypeScript

## Technologies utilisées

- Angular 21
- TypeScript
- RxJS
- Server-Side Rendering (SSR)
- Express (pour le serveur SSR)